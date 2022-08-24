<template>
  <div class="w-1/3 pt-5">
    <MovieBooking></MovieBooking>
    <TotalPay>
      <p class="mt-3 text-2xl font-bold text-red-600">
        Tổng:
        {{ totalCost | formatMoney }}
        VNĐ
      </p>
    </TotalPay>
    <slot>Thanh toán</slot>
  </div>
</template>

<script>
import MovieBooking from './MovieBooking.vue'
import TotalPay from './TotalPay.vue'
export default {
  filters: {
    formatMoney(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
  components: { MovieBooking, TotalPay },
  props: {
    totalCost: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
</style>