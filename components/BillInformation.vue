<template>
  <div class="w-1/3 pt-5">
    <MovieBooking></MovieBooking>
    <!-- <Combo
      :combo1="combo_1"
      :combo2="combo_2"
      @update:combo1="updateCombo1"
      @update:combo2="updateCombo2"
    ></Combo> -->
    <TotalPay>
      <p class="mt-3 text-2xl font-bold text-red-600">
        Tổng:
        {{ totalCost() | formatMoney }}
        VNĐ
      </p>
    </TotalPay>
    <slot>Thanh toán</slot>
  </div>
</template>

<script>
import MovieBooking from './MovieBooking.vue'
// import Combo from './Combo.vue'
import TotalPay from './TotalPay.vue'
export default {
  filters: {
    formatMoney(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
  components: { MovieBooking, TotalPay },
  inject: ['seatSelectedComputed'],
  data() {
    return {
      combo_1: 0,
      combo_2: 0,
    }
  },
  methods: {
    updateCombo1(value) {
      this.combo_1 = parseInt(value)
    },
    updateCombo2(value) {
      this.combo_2 = parseInt(value)
    },
    totalCost() {
      const seatNormal = this.seatSelectedComputed.filter(
        (seat) => seat.seatClass === 'normal'
      )
      const seatVip = this.seatSelectedComputed.filter(
        (seat) => seat.seatClass === 'vip'
      )
      const seatCouple = this.seatSelectedComputed.filter(
        (seat) => seat.seatClass === 'couple'
      )
      return (
        seatNormal.length * 90000 +
        seatVip.length * 105000 +
        seatCouple.length * 150000
      )
    },
  },
}
</script>

<style>
</style>