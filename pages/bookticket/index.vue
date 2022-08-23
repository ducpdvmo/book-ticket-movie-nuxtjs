<template>
  <div class="bg-[#1615158a] flex w-[1280px] mx-auto justify-around">
    <SeatCinema
      :list-seat="currentTicketRoom[0].listseat"
      @targetSeat="targetSeat"
    >
      <button
        class="
          text-white
          bg-red-700
          hover:bg-red-800
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2.5
          mt-5
        "
        @click="resetSelected"
      >
        CHỌN LẠI
      </button>
    </SeatCinema>
    <BillInformation>
      <div class="flex justify-center my-10">
        <button
          class="
            text-white
            bg-blue-700
            hover:bg-blue-800
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            text-center
            inline-flex
            items-center
            mx-4
          "
          @click="setSeatSelected"
        >
          <font-awesome-icon class="mr-2" icon="fa-solid fa-credit-card" />
          Combo
        </button>
        <button
          class="
            text-white
            bg-blue-700
            hover:bg-blue-800
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            text-center
            inline-flex
            items-center
            mx-4
          "
          @click="submitBookTicket"
        >
          <font-awesome-icon class="mr-2" icon="fa-solid fa-credit-card" />
          Đặt Vé Ngay
        </button>
      </div>
    </BillInformation>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import { computed } from 'vue'
import SeatCinema from '../../components/SeatCinema.vue'
import BillInformation from '../../components/BillInformation.vue'
export default {
  components: { SeatCinema, BillInformation },
  provide() {
    return {
      movie: computed(() => this.movie),
      seatSelectedComputed: computed(() => this.seatSelected),
    }
  },
  layout: 'home',
  async asyncData(context) {
    const TicketRoom = await axios.get(
      'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/TicketRoom.json'
    )
    return {
      TicketRoom: TicketRoom.data,
    }
  },
  data() {
    return {
      currentTicketRoom: null,
      seatSelected: [],
      seatSelectedRowA: [],
      seatSelectedRowB: [],
      seatSelectedRowC: [],
      seatSelectedRowD: [],
    }
  },
  computed: {
    movie() {
      const movies = this.$store.getters['movies/movies']
      const currentMovieBooking = movies.filter(
        (movie) => movie.movie_id === parseInt(this.$route.query.movie_id)
      )
      return currentMovieBooking
    },
    seatSelectedComputed() {
      return this.seatSelected
    },
  },
  created() {
    this.fetchMovie()
    this.currentTicketRoom = this.fetchCurrentTicketRoom()
  },
  methods: {
    fetchMovie() {
      this.$store.dispatch('movies/getAllMovies')
    },
    fetchCurrentTicketRoom() {
      return this.TicketRoom.filter(
        (ticket) =>
          ticket.schedule_id === parseInt(this.$route.query.schedule_id)
      )
    },
    targetSeat(seat) {
      if (seat.status) {
        if (seat.seat_name.includes('a')) {
          const indexA = this.seatSelectedRowA.findIndex(
            (item) => item.serial === seat.serial
          )
          if (indexA > -1) {
            this.seatSelectedRowA.splice(indexA, 1)
          } else {
            this.seatSelectedRowA.push(seat)
          }
        }
        if (seat.seat_name.includes('b')) {
          const indexB = this.seatSelectedRowB.findIndex(
            (item) => item.serial === seat.serial
          )
          if (indexB > -1) {
            this.seatSelectedRowB.splice(indexB, 1)
          } else {
            this.seatSelectedRowB.push(seat)
          }
        }
        if (seat.seat_name.includes('c')) {
          const indexC = this.seatSelectedRowC.findIndex(
            (item) => item.serial === seat.serial
          )
          if (indexC > -1) {
            this.seatSelectedRowC.splice(indexC, 1)
          } else {
            this.seatSelectedRowC.push(seat)
          }
        }
        if (seat.seat_name.includes('d')) {
          const indexD = this.seatSelectedRowD.findIndex(
            (item) => item.serial === seat.serial
          )
          if (indexD > -1) {
            this.seatSelectedRowD.splice(indexD, 1)
          } else {
            this.seatSelectedRowD.push(seat)
          }
        }
        const indexSeat = this.seatSelected.findIndex(
          (item) => item.seat_name === seat.seat_name
        )
        if (indexSeat > -1) {
          this.seatSelected.splice(indexSeat, 1)
        } else {
          this.seatSelected.push(seat)
        }
      } else return false
    },
    submitBookTicket() {
      window.location.reload(true)
      this.$store.dispatch('seatCinema/bookedTicket', {
        schedule_id: this.$route.query.schedule_id,
        seatSelected: this.seatSelected,
      })
    },
    resetSelected() {
      // eslint-disable-next-line no-unused-expressions, no-sequences
      ;(this.seatSelected = []),
        (this.seatSelectedRowA = []),
        (this.seatSelectedRowB = []),
        (this.seatSelectedRowC = []),
        (this.seatSelectedRowD = [])
      this.$nuxt.$emit('reset:selectedSeat')
    },
    setSeatSelected() {
      localStorage.setItem('seatSelected', JSON.stringify(this.seatSelected))
      Cookies.set('seatSelected', JSON.stringify(this.seatSelected))
      this.$store.commit('seatCinema/setSeatSelected', this.seatSelected)
      this.$router.push({
        name: 'bookticket-combo___vi',
        query: {
          movie_id: this.$route.query.movie_id,
          schedule_id: this.$route.query.schedule_id,
        },
      })
    },
  },
}
</script>

<style>
</style>