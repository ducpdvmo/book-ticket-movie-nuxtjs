<template>
  <div class="w-1/3 pt-5">
    <MovieBooking></MovieBooking>
    <TotalPay>
      <div>
        <div class="py-10 flex flex-col ml-5">
          <label
            for="promo"
            class="font-semibold inline-block mb-3 text-sm uppercase"
            >Promo Code</label
          >
          <input
            id="promo"
            ref="promo"
            v-model="promoComputed"
            type="text"
            placeholder="Enter your code"
            class="p-2 text-sm w-3/5"
            @blur="endTypePromo"
          />
        </div>
        <p class="mt-3 text-2xl font-bold text-red-600">
          Tổng:
          {{ totalCost | formatMoney }}
          VNĐ
        </p>
      </div>
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
    promo: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    promoComputed: {
      get() {
        return this.promo
      },
      set() {
        this.$emit('update:promo', this.$refs.promo.value)
      },
    },
  },
  methods: {
    endTypePromo() {
      this.$emit('endTypePromo', this.$refs.promo.value)
    },
  },
}
</script>

<style>
</style>