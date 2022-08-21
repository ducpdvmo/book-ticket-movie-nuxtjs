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
          "
          @click="submitBookTicket"
        >
          <font-awesome-icon class="mr-2" icon="fa-solid fa-credit-card" />
          Thanh toán
        </button>
      </div>
    </BillInformation>
  </div>
</template>

<script>
import axios from 'axios'
import { computed } from 'vue'
import SeatCinema from '../../components/SeatCinema.vue'
import BillInformation from '../../components/BillInformation.vue'
export default {
  components: { SeatCinema, BillInformation },
  provide() {
    return {
      movie: computed(() => this.movie),
      seatNameSelectedComputed: computed(() => this.seatNameSelected),
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
      seatNameSelected: [],
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
    seatNameSelectedComputed() {
      return this.seatNameSelected
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
        const indexName = this.seatNameSelected.indexOf(seat.seat_name)
        if (indexName > -1) {
          this.seatNameSelected.splice(indexName, 1)
        } else {
          this.seatNameSelected.push(seat.seat_name)
        }
      } else return false
    },
    submitBookTicket() {
      const api =
        'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/TicketRoom/' +
        this.$route.query.schedule_id +
        '/listseat/'
      this.seatSelectedRowA.forEach((seat) => {
        const seatTmp = { ...seat }
        seatTmp.status = false
        console.log(seatTmp)
        axios.put(api + 'RowA/' + seat.serial + '.json', seatTmp)
      })
      this.seatSelectedRowB.forEach((seat) => {
        const seatTmp = { ...seat }
        seatTmp.status = false
        axios.put(api + 'RowB/' + seat.serial + '.json', seatTmp)
      })
      this.seatSelectedRowB.forEach((seat) => {
        const seatTmp = { ...seat }
        seatTmp.status = false
        axios.put(api + 'RowB/' + seat.serial + '.json', seatTmp)
      })
      this.seatSelectedRowC.forEach((seat) => {
        const seatTmp = { ...seat }
        seatTmp.status = false
        axios.put(api + 'RowC/' + seat.serial + '.json', seatTmp)
      })
      this.seatSelectedRowD.forEach((seat) => {
        const seatTmp = { ...seat }
        seatTmp.status = false
        axios.put(api + 'RowD/' + seat.serial + '.json', seatTmp)
      })
      window.location.reload(true)
    },
    resetSelected() {
      // eslint-disable-next-line no-unused-expressions, no-sequences
      ;(this.seatNameSelected = []),
        (this.seatSelectedRowA = []),
        (this.seatSelectedRowB = []),
        (this.seatSelectedRowC = []),
        (this.seatSelectedRowD = [])
      this.$nuxt.$emit('reset:selectedSeat')
    },
  },
}
</script>

<style>
</style>