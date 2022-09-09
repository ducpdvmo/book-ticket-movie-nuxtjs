<template>
  <div class="flex flex-col items-center border w-[60%] mx-auto">
    <h2 class="font-bold text-2xl mb-5">{{ $t('combo.titlePage') }}</h2>
    <h4 class="mb-5 text-xl">{{ $t('combo.title') }}</h4>
    <div class="flex mx-auto flex-wrap border">
      <div class="w-[45%] px-10 flex">
        <img
          class="w-1/3 h-[150px]"
          src="https://www.cgv.vn/media/concession/web/62c3ee7b85011_1657007740.png"
          alt=""
        />
        <div class="ml-5 mb-5">
          <p class="font-bold text-xl">{{ $t('combo.combo1.title') }}</p>
          <p>{{ $t('combo.combo1.description.1') }}</p>
          <p>{{ $t('combo.combo1.description.2') }}</p>
          <p>{{ $t('combo.combo1.description.3') }}</p>
          <p>{{ $t('combo.combo1.description.4') }}</p>
          <p class="font-bold text-lg">
            {{ $t('combo.cost') }}: {{ combo.combo1.cost | formatMoney }} ₫
          </p>
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
          <p class="font-bold text-xl">{{ $t('combo.combo2.title') }}</p>
          <p>{{ $t('combo.combo2.description.1') }}</p>
          <p>{{ $t('combo.combo2.description.2') }}</p>
          <p>{{ $t('combo.combo2.description.3') }}</p>
          <p>{{ $t('combo.combo2.description.4') }}</p>
          <p class="font-bold text-lg">
            {{ $t('combo.cost') }}: {{ combo.combo2.cost | formatMoney }} ₫
          </p>
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
          <p class="font-bold text-xl">{{ $t('combo.combo3.title') }}</p>
          <p>{{ $t('combo.combo3.description.1') }}</p>
          <p>{{ $t('combo.combo3.description.2') }}</p>
          <p>{{ $t('combo.combo3.description.3') }}</p>
          <p>{{ $t('combo.combo3.description.4') }}</p>
          <p class="font-bold text-lg">
            {{ $t('combo.cost') }}: {{ combo.combo3.cost | formatMoney }} ₫
          </p>
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
          <p class="font-bold text-xl">{{ $t('combo.combo4.title') }}</p>
          <p>{{ $t('combo.combo4.description.1') }}</p>
          <p>{{ $t('combo.combo4.description.2') }}</p>
          <p>{{ $t('combo.combo4.description.3') }}</p>
          <p>{{ $t('combo.combo4.description.4') }}</p>
          <p class="font-bold text-lg">
            {{ $t('combo.cost') }}: {{ combo.combo4.cost | formatMoney }} ₫
          </p>
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
          <p class="font-bold text-xl">{{ $t('combo.combo5.title') }}</p>
          <p>{{ $t('combo.combo5.description.1') }}</p>
          <p>{{ $t('combo.combo5.description.2') }}</p>
          <p>{{ $t('combo.combo5.description.3') }}</p>
          <p>{{ $t('combo.combo5.description.4') }}</p>
          <p class="font-bold text-lg">
            {{ $t('combo.cost') }}: {{ combo.combo5.cost | formatMoney }} ₫
          </p>
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
          <p class="font-bold text-xl">{{ $t('combo.combo6.title') }}</p>
          <p>{{ $t('combo.combo6.description.1') }}</p>
          <p>{{ $t('combo.combo6.description.2') }}</p>
          <p>{{ $t('combo.combo6.description.3') }}</p>
          <p>{{ $t('combo.combo6.description.4') }}</p>
          <p class="font-bold text-lg">
            {{ $t('combo.cost') }}: {{ combo.combo6.cost | formatMoney }} ₫
          </p>
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
        {{$t('combo.prev')}}
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
            <p>{{$t('combo.cinema')}}:</p>
            <p>{{ currentTicketRoom[0].cine_name }}</p>
          </div>
          <div class="flex justify-between w-4/5">
            <p>{{$t('combo.showtime')}}:</p>
            <p>{{ currentTicketRoom[0].show_time }}</p>
          </div>
        </div>
        <div class="w-[30%] flex flex-col justify-center items-center">
          <div class="flex justify-between w-4/5">
            <p>{{$t('combo.totalCostTicket')}}:</p>
            <p>{{ costSeat | formatMoney }}</p>
          </div>
          <div class="flex justify-between w-4/5">
            <p>{{$t('combo.combo')}}:</p>
            <p>{{ costCombo() | formatMoney }}</p>
          </div>
          <div class="flex justify-between w-4/5">
            <p>{{$t('combo.total')}}:</p>
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
        @click="showPopup = true"
      >
        {{$t('combo.next')}}
        <font-awesome-icon
          class="font-bold text-3xl absolute right-2 top-[35%]"
          icon="fa-solid fa-angle-right"
        />
      </button>
    </div>
    <GetPayment
      v-show="showPopup"
      @close:popup="showPopup = false"
      @handle:payment="submitBooking"
    >
      <template #icon_noti>
        <font-awesome-icon
          class="w-16 h-16 flex items-center text-red-500 mx-auto"
          icon="fa-solid fa-cart-arrow-down"
        />
      </template>
      <template #title_noti
        ><p>
          {{$t('bookTicket.contentPayment')}}
        </p></template
      >
      <template #handle_name>{{$t('bookTicket.payment')}}</template>
      <template #title_success>
        <h2 class="text-xl font-bold py-4">{{$t('bookTicket.paymentSuccess')}}</h2>
        <p class="text-sm text-gray-500 px-8">
          {{$t('bookTicket.thanks')}}
        </p>
      </template>
    </GetPayment>
  </div>
</template>

<script>
import axios from 'axios'
import GetPayment from '../../../components/GetPayment.vue'
export default {
  name: 'ComboPage',
  filters: {
    formatMoney(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
  components: { GetPayment },
  layout: 'home',
  middleware: ['keepUserLogin', 'check-login', 'auth', 'setSeat'],
  async asyncData(context) {
    const tickets = []
    await axios
      .get(
        'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/TicketRoom.json'
      )
      .then((response) => {
        for (const key in response.data) {
          tickets.push({ ...response.data[key], id: key })
        }
      })
    return {
      TicketRoom: tickets,
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
      showPopup: false,
    }
  },
  computed: {
    movie() {
      const movies = this.$store.getters['movies/movies']
      const currentMovieBooking = movies.filter(
        (movie) => movie.id.toString() === this.$route.query.movie_id.toString()
      )
      return currentMovieBooking
    },
    seatSelected() {
      return this.$store.getters['seatCinema/getSeatSelected']
    },
    costSeat() {
      return this.$store.getters['seatCinema/getTotalCost']
    },
    billOfCurrentUser() {
      return this.$store.getters['bill/getBillOfUser'](
        this.$store.getters['user/getUser'].uid
      )
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
      if (Array.isArray(this.TicketRoom))
        return this.TicketRoom.filter(
          (ticket) =>
            ticket.schedule_id.toString() ===
            this.$route.query.schedule_id.toString()
        )
      else {
        const tempTicketRoom = [...Object.values(this.TicketRoom)]
        return tempTicketRoom.filter(
          (ticket) =>
            ticket.schedule_id.toString() ===
            this.$route.query.schedule_id.toString()
        )
      }
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
    totalCost() {
      return this.costCombo() + this.costSeat
    },
    async submitBooking() {
      await this.$store.dispatch('seatCinema/bookedTicket', {
        schedule_id: this.currentTicketRoom[0].id,
        seatSelected: this.seatSelected,
      })
      const bill = {
        show_time: this.currentTicketRoom[0].show_time,
        movie_name: this.movie[0].name,
        seatSelected: this.seatSelected,
        totalPay: this.totalCost(),
      }
      let tempBill
      if (this.billOfCurrentUser.length !== 0) {
        tempBill = JSON.parse(JSON.stringify(this.billOfCurrentUser[0]))
        delete tempBill.id
        if (Array.isArray(tempBill.bills)) tempBill.bills.push(bill)
        else {
          tempBill.bills = [...Object.values(tempBill.bills)]
          tempBill.bills.push(bill)
        }
      }
      const payload = {
        methods: this.billOfCurrentUser.length !== 0 ? 'put' : 'post',
        id:
          this.billOfCurrentUser.length !== 0
            ? this.billOfCurrentUser[0].id
            : null,
        dataBill:
          this.billOfCurrentUser.length !== 0
            ? tempBill
            : {
                user_id: this.$store.getters['user/getUser'].uid,
                bills: [bill],
              },
      }
      await this.$store.dispatch('bill/setBillOfUserId', payload)
      await this.$store.dispatch('bill/getAllBills')
    },
  },
}
</script>

<style>
</style>