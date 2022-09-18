<template>
  <div class="flex flex-col w-full lg:w-1/3 pt-5 bg-[#1615158a] px-5 rounded-xl">
    <div class="flex lg:flex-col">
      <MovieBooking></MovieBooking>
      <TotalPay>
        <div class="w-full">
          <div class="py-10 w-full flex flex-col lg:ml-5">
            <label
              for="promo"
              class="font-semibold inline-block mb-3 text-sm uppercase"
              >{{ $t('bookTicket.promoCode') }}</label
            >
            <input
              id="promo"
              ref="promo"
              v-model="promoComputed"
              type="text"
              placeholder="Enter your code"
              class="p-2 text-sm w-full md:w-4/5"
              @blur="endTypePromo"
            />
          </div>
          <p class="mt-3 text-2xl font-bold text-red-600">
            {{ $t('bookTicket.total') }}:
            {{ totalCost | formatMoney }}
            VNĐ
          </p>
        </div>
      </TotalPay>
    </div>
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