<template>
  <div class="flex flex-col items-center border w-[60%] mx-auto">
    <h2 class="font-bold text-2xl mb-5">BOOKING ONLINE</h2>
    <h4 class="mb-5 text-xl">Bắp Nước</h4>
    <div class="flex mx-auto flex-wrap border">
      <div class="w-[45%] px-10 flex">
        <img
          class="w-1/3 h-[150px]"
          src="https://www.cgv.vn/media/concession/web/62c3ee7b85011_1657007740.png"
          alt=""
        />
        <div class="ml-5 mb-5">
          <p class="font-bold text-xl">SNOOPY SINGLE COMBO</p>
          <p>
            1 ly Snoopy 32Oz (kèm nước) + 1 bắp ngọt lớn <br />* Miễn phí đổi vị
            bắp Phô mai, Caramel <br />**Nhận trong ngày xem phim <br />***Mẫu
            ly phụ thuộc vào số lượng hàng tại rạp
          </p>
          <p class="font-bold text-lg">Giá: 239.000,00 ₫</p>
          <div class="flex">
            <button
              :disabled="combo.combo1.count <= 0"
              class="w-8 text-white bg-red-500"
              @click="combo.combo1.count--"
            >
              -
            </button>
            <p class="mx-3 border w-8 h-8 text-center">
              {{ combo.combo1.count }}
            </p>
            <button
              class="w-8 text-white bg-red-500"
              @click="combo.combo1.count++"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div class="w-[45%] px-10 flex">
        <img
          class="w-1/3 h-[150px]"
          src="https://www.cgv.vn/media/concession/web/62c3ef50cb95e_1657007953.png"
          alt=""
        />
        <div class="ml-5 mb-5">
          <p class="font-bold text-xl">SNOOPY DOUBLE COMBO</p>
          <p>
            2 ly Snoopy 32Oz (kèm nước) + 1 bắp ngọt lớn <br />* Miễn phí đổi vị
            bắp Phô mai, Caramel <br />**Nhận trong ngày xem phim <br />***Mẫu
            ly phụ thuộc vào số lượng hàng tại rạp
          </p>
          <p class="font-bold text-lg">Giá: 409.000,00 ₫</p>
          <div class="flex">
            <button
              :disabled="combo.combo2.count <= 0"
              class="w-8 text-white bg-red-500"
              @click="combo.combo2.count--"
            >
              -
            </button>
            <p class="mx-3 border w-8 h-8 text-center">
              {{ combo.combo2.count }}
            </p>
            <button
              class="w-8 text-white bg-red-500"
              @click="combo.combo2.count++"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div class="w-[45%] px-10 flex">
        <img
          class="w-1/3 h-[150px]"
          src="https://www.cgv.vn/media/concession/web/62c3efe0cf615_1657008097.png"
          alt=""
        />
        <div class="ml-5 mb-5">
          <p class="font-bold text-xl">SNOOPY TRIPLE COMBO</p>
          <p>
            3 ly Snoopy 32Oz (kèm nước) + 1 bắp ngọt lớn <br />* Miễn phí đổi vị
            bắp Phô mai, Caramel <br />**Nhận trong ngày xem phim <br />***Mẫu
            ly phụ thuộc vào số lượng hàng tại rạp
          </p>
          <p class="font-bold text-lg">Giá: 599.000,00 ₫</p>
          <div class="flex">
            <button
              :disabled="combo.combo3.count <= 0"
              class="w-8 text-white bg-red-500"
              @click="combo.combo3.count--"
            >
              -
            </button>
            <p class="mx-3 border w-8 h-8 text-center">
              {{ combo.combo3.count }}
            </p>
            <button
              class="w-8 text-white bg-red-500"
              @click="combo.combo3.count++"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div class="w-[45%] px-10 flex">
        <img
          class="w-1/3 h-[150px]"
          src="https://www.cgv.vn/media/concession/web/62fe077bd978b_1660815228.png"
          alt=""
        />
        <div class="ml-5 mb-5">
          <p class="font-bold text-xl">SINGLE BT21 COMBO</p>
          <p>
            1 ly BT21 Back To School 32Oz + 1 nước siêu lớn <br />* Tặng ngay 01
            phần bắp ngọt lớn từ 19-26.08 <br />**Nhận trong ngày xem phim
            <br />***Mẫu ly phụ thuộc vào số lượng hàng tại rạp
          </p>
          <p class="font-bold text-lg">Giá: 299.000,00 ₫</p>
          <div class="flex">
            <button
              :disabled="combo.combo4.count <= 0"
              class="w-8 text-white bg-red-500"
              @click="combo.combo4.count--"
            >
              -
            </button>
            <p class="mx-3 border w-8 h-8 text-center">
              {{ combo.combo4.count }}
            </p>
            <button
              class="w-8 text-white bg-red-500"
              @click="combo.combo4.count++"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div class="w-[45%] px-10 flex">
        <img
          class="w-1/3 h-[150px]"
          src="https://www.cgv.vn/media/concession/web/62fe09d0e267d_1660815825.png"
          alt=""
        />
        <div class="ml-5 mb-5">
          <p class="font-bold text-xl">BT21 BACK TO SCHOOL</p>
          <p>
            08 ly BT21 Back To School 32Oz <br />* Tặng ngay 01 phần bắp ngọt
            lớn từ 19-26.08 <br />**Nhận trong ngày xem phim <br />***Mẫu ly phụ
            thuộc vào số lượng hàng tại rạp
          </p>
          <p class="font-bold text-lg">Giá: 2.099.000,00 ₫</p>
          <div class="flex">
            <button
              :disabled="combo.combo5.count <= 0"
              class="w-8 text-white bg-red-500"
              @click="combo.combo5.count--"
            >
              -
            </button>
            <p class="mx-3 border w-8 h-8 text-center">
              {{ combo.combo5.count }}
            </p>
            <button
              class="w-8 text-white bg-red-500"
              @click="combo.combo5.count++"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div class="w-[45%] px-10 flex">
        <img
          class="w-1/3 h-[150px]"
          src="https://www.cgv.vn/media/concession/web/625f7a6cbe151_1650424429.png"
          alt=""
        />
        <div class="ml-5 mb-5">
          <p class="font-bold text-xl">MY COMBO</p>
          <p>
            1 bắp lớn + 1 nước siêu lớn. Nhận trong ngày xem phim <br />* Tặng
            ngay 01 phần bắp ngọt lớn từ 19-26.08 <br />**Nhận trong ngày xem
            phim <br />***Mẫu ly phụ thuộc vào số lượng hàng tại rạp
          </p>
          <p class="font-bold text-lg">Giá: 83.000,00 ₫</p>
          <div class="flex">
            <button
              :disabled="combo.combo6.count <= 0"
              class="w-8 text-white bg-red-500"
              @click="combo.combo6.count--"
            >
              -
            </button>
            <p class="mx-3 border w-8 h-8 text-center">
              {{ combo.combo6.count }}
            </p>
            <button
              class="w-8 text-white bg-red-500"
              @click="combo.combo6.count++"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center bg-black w-full">
      <button
        class="
          relative
          text-white
          bg-[#343433]
          hover:bg-[#464643]
          font-medium
          rounded-lg
          text-2xl text-justify
          py-2.5
          ml-3
          w-24
          h-24
          pl-6
        "
      >
        <font-awesome-icon
          class="font-bold text-3xl absolute left-2 top-[35%]"
          icon="fa-solid fa-angle-left"
        />
        PREV
      </button>
      <div class="flex text-white">
        <div
          class="
            flex
            w-[40%]
            ml-5
            justify-center
            items-center
            border-r-2 border-r-[#b0acac]
          "
        >
          <img class="w-20 h-28" :src="movie[0].photoUrl" alt="" />
          <p class="ml-5">{{ movie[0].name }}</p>
        </div>
        <div
          class="
            w-[30%]
            flex flex-col
            justify-center
            items-center
            border-r-2 border-r-[#b0acac]
          "
        >
          <div class="flex mb-5 justify-between w-4/5">
            <p>Rạp:</p>
            <p>{{ currentTicketRoom[0].cine_name }}</p>
          </div>
          <div class="flex justify-between w-4/5">
            <p>Suất chiếu:</p>
            <p>{{ currentTicketRoom[0].show_time }}</p>
          </div>
        </div>
        <div class="w-[30%] flex flex-col justify-center items-center">
          <div class="flex justify-between w-4/5">
            <p>Tổng giá vé:</p>
            <p>{{ costSeat() | formatMoney }}</p>
          </div>
          <div class="flex justify-between w-4/5">
            <p>Combo:</p>
            <p>{{ costCombo() | formatMoney }}</p>
          </div>
          <div class="flex justify-between w-4/5">
            <p>Tổng:</p>
            <p>{{ totalCost() | formatMoney }}</p>
          </div>
        </div>
      </div>
      <button
        class="
          relative
          text-white
          bg-red-700
          hover:bg-red-800
          font-medium
          rounded-lg
          text-2xl text-justify
          py-2.5
          mr-3
          w-24
          h-24
          pl-2
        "
        @click="submitBooking"
      >
        NEXT
        <font-awesome-icon
          class="font-bold text-3xl absolute right-2 top-[35%]"
          icon="fa-solid fa-angle-right"
        />
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  filters: {
    formatMoney(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
  layout: 'home',
  middleware: 'setSeat',
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
      combo: {
        combo1: {
          count: 0,
          cost: 239000,
        },
        combo2: {
          count: 0,
          cost: 409000,
        },
        combo3: {
          count: 0,
          cost: 599000,
        },
        combo4: {
          count: 0,
          cost: 299000,
        },
        combo5: {
          count: 0,
          cost: 2099000,
        },
        combo6: {
          count: 0,
          cost: 83000,
        },
      },
      // seatSelected: null
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
    seatSelected() {
      return this.$store.getters['seatCinema/getSeatSelected']
    },
  },
  created() {
    this.fetchMovie()
    this.currentTicketRoom = this.fetchCurrentTicketRoom()
    // this.seatSelected = this.fetchSeatSelected()
    console.log(this.seatSelected);
  },
  methods: {
    // fetchSeatSelected(){
    //   return this.$store.getters['seatCinema/getSeatSelected']
    // },
    fetchMovie() {
      this.$store.dispatch('movies/getAllMovies')
    },
    fetchCurrentTicketRoom() {
      return this.TicketRoom.filter(
        (ticket) =>
          ticket.schedule_id === parseInt(this.$route.query.schedule_id)
      )
    },
    costCombo() {
      return (
        this.combo.combo1.count * this.combo.combo1.cost +
        this.combo.combo2.count * this.combo.combo2.cost +
        this.combo.combo3.count * this.combo.combo3.cost +
        this.combo.combo4.count * this.combo.combo4.cost +
        this.combo.combo5.count * this.combo.combo5.cost +
        this.combo.combo6.count * this.combo.combo6.cost
      )
    },
    costSeat() {
      const seatNormal = this.seatSelected.filter(
        (seat) => seat.seatClass === 'normal'
      )
      const seatVip = this.seatSelected.filter(
        (seat) => seat.seatClass === 'vip'
      )
      const seatCouple = this.seatSelected.filter(
        (seat) => seat.seatClass === 'couple'
      )
      return (
        seatNormal.length * 90000 +
        seatVip.length * 105000 +
        seatCouple.length * 150000
      )
    },
    totalCost() {
      return this.costCombo() + this.costSeat()
    },
    submitBooking() {
      this.$store.dispatch('seatCinema/bookedTicket', {
        schedule_id: parseInt(this.$route.query.schedule_id),
        seatSelected: this.seatSelected,
      })
      this.$router.replace({
        name: 'bookticket___vi',
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