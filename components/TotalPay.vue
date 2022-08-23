<template>
  <div class="mt-10">
    <label class="title"
      >Vị Trí Đã Chọn: {{ seatSelectedComputed.length }}</label
    >
    <div
      class="
        min-h-[105px]
        border-2
        mt-3
        border-solid border-white
        rounded-md
        pb-2
        flex flex-wrap
      "
    >
      <p
        v-if="seatSelectedComputed.length == 0"
        class="text-lg font-bold text-center mt-8 text-red-600 mx-auto"
      >
        Chưa chọn ghế!
      </p>
      <button
        v-for="(seat, index) in seatSelectedComputed"
        :key="index"
        class="
          mt-2
          seat
          uppercase
          text-[#eae1e1]
          ml-[5px]
          rounded-md
          w-10
          h-10
          text-center
          font-medium
          bg-[#85c325e6]
        "
        :class="{
          normal: seat.seatClass === 'normal',
          vip: seat.seatClass === 'vip',
          couple: seat.seatClass === 'couple',
        }"
      >
        {{ seat.seat_name }}
      </button>
    </div>
    <div class="">
      <div class="flex justify-between items-center my-5">
        <p class="w-1/3 pl-5 font-bold text-lg">Loại vé</p>
        <p class="w-1/3 text-center font-bold text-lg">Số lượng</p>
        <p class="w-1/3 text-center font-bold text-lg">Thành tiền</p>
      </div>
      <div v-if="seatNormal" class="flex justify-between items-center mb-4">
        <p class="w-1/3 pl-5">Ghế thường</p>
        <input
          :value="seatNormal"
          disabled
          class="w-10 text-center"
          type="text"
        />
        <p class="w-1/3 text-center">
          {{ (seatNormal * 90000) | formatMoney }}
        </p>
      </div>
      <div v-if="seatVip" class="flex justify-between items-center mb-4">
        <p class="w-1/3 pl-5">Ghế víp</p>
        <input :value="seatVip" disabled class="w-10 text-center" type="text" />
        <p class="w-1/3 text-center">{{ (seatVip * 105000) | formatMoney }}</p>
      </div>
      <div v-if="seatCouple" class="flex justify-between items-center">
        <p class="w-1/3 pl-5">Ghế đôi</p>
        <input
          :value="seatCouple"
          disabled
          class="w-10 text-center"
          type="text"
        />
        <p class="w-1/3 text-center">
          {{ (150000 * seatCouple) | formatMoney }}
        </p>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  filters: {
    formatMoney(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
  inject: ['seatSelectedComputed'],
  data() {
    return {}
  },
  computed: {
    seatNormal() {
      return this.seatSelectedComputed.filter(
        (seat) => seat.seatClass === 'normal'
      ).length
    },
    seatVip() {
      return this.seatSelectedComputed.filter(
        (seat) => seat.seatClass === 'vip'
      ).length
    },
    seatCouple() {
      return this.seatSelectedComputed.filter(
        (seat) => seat.seatClass === 'couple'
      ).length
    },
  },
  created() {},
}
</script>

<style scoped>
.vip{
  background-color: rgb(209, 209, 35);
}
.couple{
  width: 80px;
  background-color: #de29cf;
}
</style>