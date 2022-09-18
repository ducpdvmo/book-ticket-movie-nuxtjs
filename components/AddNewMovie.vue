<template>
  <div
    class="
      bg-[#71707094]
      overflow-y-auto overflow-x-hidden
      flex
      justify-center
      items-center
      fixed
      top-0
      left-0
      p-4
      w-full
      md:inset-0
      h-full
    "
  >
    <div class="relative w-full max-w-2xl h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow">
        <div class="flex justify-between items-start p-4 rounded-t border-b">
          <h3 class="lg:text-xl text-sm sm:text-base font-semibold text-gray-900">
            {{ $t('formAddNewMovie.addMovie') }}
          </h3>
          <button
            type="button"
            class="
              text-gray-400
              bg-transparent
              hover:bg-gray-200 hover:text-gray-900
              rounded-lg
              text-sm
              p-1.5
              ml-auto
              inline-flex
              items-center
            "
            @click="$emit('closeModalCreateMovie')"
          >
            <font-awesome-icon class="h-5 w-5" icon="fa-solid fa-xmark" />
          </button>
        </div>
        <keep-alive>
          <MovieCreate
            v-if="showFormAddMovie"
            @update:data="updateData"
          ></MovieCreate>
          <ScheduleCreate
            v-else
            @update:data="updateDataSchedule"
          ></ScheduleCreate>
        </keep-alive>
        <div
          class="
            relative
            min-h-[75px]
            p-6
            space-x-2
            rounded-b
            border-t border-gray-200
          "
        >
          <button
            v-if="!showFormAddMovie"
            class="
              text-white
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              absolute
              top-[16px]
              left-[15px]
            "
            @click.prevent="handleBackModal()"
          >
            {{ $t('formAddNewMovie.back') }}
          </button>
          <button
            v-if="showFormAddMovie"
            class="
              text-white
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              absolute
              top-[16px]
              right-[15px]
            "
            @click.prevent="handleNextModal()"
          >
            {{ $t('formAddNewMovie.next') }}
          </button>
          <button
            v-else
            class="
              text-white
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              absolute
              top-[16px]
              right-[15px]
            "
            @click.prevent="showPopup = true"
          >
            {{ $t('formAddNewMovie.create') }}
          </button>
          <GetPayment
            v-show="showPopup"
            @close:popup="showPopup = false"
            @handle:payment="handleCreateMovie()"
          >
            <template #icon_noti>
              <font-awesome-icon
                class="w-16 h-16 flex items-center text-red-500 mx-auto"
                icon="fa-solid fa-folder-plus"
              />
            </template>
            <template #title_noti
              ><p>{{ $t('formAddNewMovie.notiCreate') }}</p></template
            >
            <template #handle_name>{{ $t('formAddNewMovie.create') }}</template>
            <template #title_success>
              <h2 class="text-xl font-bold py-4">
                {{ $t('formAddNewMovie.createSuccess') }}
              </h2>
              <p class="text-sm text-gray-500 px-8">
                {{ $t('formAddNewMovie.desCreated') }}
              </p>
            </template>
          </GetPayment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import MovieCreate from './MovieCreate.vue'
import ScheduleCreate from './ScheduleCreate.vue'
import GetPayment from './GetPayment.vue'
export default {
  components: { MovieCreate, ScheduleCreate, GetPayment },
  data() {
    return {
      showFormAddMovie: true,
      showFormSchedule: false,
      showPopup: false,
      data: null,
    }
  },
  computed: {},
  created() {},
  methods: {
    handleNextModal() {
      if (this.showFormAddMovie && !this.showFormSchedule) {
        this.showFormAddMovie = false
        this.showFormSchedule = true
      }
    },
    handleBackModal() {
      if (!this.showFormAddMovie && this.showFormSchedule) {
        this.showFormAddMovie = true
        this.showFormSchedule = false
      }
    },
    updateData(value) {
      this.data = { ...value }
    },
    updateDataSchedule(value) {
      this.data = { ...this.data, ...value }
    },
    async handleDataMovie() {
      const data = {
        backgroundUrl: this.data.background,
        director: this.data.director,
        producer: this.data.producer,
        overView: this.data.overView,
        year: this.data.year,
        trailerID: this.data.trailerID ? this.data.trailerID : null,
        tags: this.data.tags ? this.data.tags : null,
        name: this.data.name,
        times: null,
        rating: 0,
        photoUrl: this.data.photo,
      }
      await this.$axios.$post(
        `https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Movies.json`,
        data
      )
    },
    async handleDataMovieSchedule(idMovie, idSchedule) {
      const apiMovieScheduleCreate = `https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/MovieSchedules/${this.data.day}/cinemas/${this.data.cinema}/cinema/show_time.json`
      const data = {
        schedule_id: idSchedule,
        time:
          this.data.ampm === 'am'
            ? `${this.data.hours}:${this.data.minutes}`
            : `${parseInt(this.data.hours) + 12}:${this.data.minutes}`,
        movie_id: idMovie,
      }
      await this.$axios.$post(apiMovieScheduleCreate, data)
    },
    createSeatInCinema(listRow) {
      const listSeat = {}
      const str = 'Row'
      listRow.forEach((row, index) => {
        listSeat[str + String.fromCharCode(65 + index)] = []
        for (let i = 0; i < row.count; i++) {
          const Seat = {
            seatClass: row.couple
              ? 'couple'
              : row.normal / 2 <= i && i < row.count - row.normal / 2
              ? 'vip'
              : 'normal',
            seat_name: row.normal
              ? `${String.fromCharCode(65 + index)}${i}`
              : `${String.fromCharCode(65 + index)}${
                  2 * i
                }-${String.fromCharCode(65 + index)}${2 * i + 1}`,
            serial: i,
            status: true,
          }
          listSeat[str + String.fromCharCode(65 + index)].push(Seat)
        }
      })
      return listSeat
    },
    async handleDataTicketRoom(idSchedule, listRow) {
      const data = {
        cine_name:
          this.data.cinema === 0
            ? 'cgv'
            : this.data.cinema === 1
            ? 'lotte'
            : 'beta',
        schedule_id: idSchedule,
        show_time:
          this.data.ampm === 'am'
            ? `${this.data.hours}:${this.data.minutes}`
            : `${parseInt(this.data.hours) + 12}:${this.data.minutes}`,
        listseat: this.createSeatInCinema(listRow),
      }
      await this.$axios.$post(
        'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/TicketRoom.json',
        data
      )
    },
    async handleCreateMovie() {
      const listRow = [
        {
          count: 13,
          normal: 6,
        },
        {
          count: 13,
          normal: 6,
        },
        {
          count: 13,
          normal: 6,
        },
        {
          count: 6,
          couple: 6,
        },
      ]
      await this.handleDataMovie()

      let movieId
      const movies = []
      await this.$axios
        .$get(
          'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Movies.json'
        )
        .then((response) => {
          for (const key in response) {
            movies.push({ ...response[key], id: key })
            movieId = key
          }
        })
      const idSchedule = uuidv4()
      const idMovie = movieId
      await this.handleDataMovieSchedule(idMovie, idSchedule)
      await this.handleDataTicketRoom(idSchedule, listRow)
    },
  },
}
</script>

<style>
</style>