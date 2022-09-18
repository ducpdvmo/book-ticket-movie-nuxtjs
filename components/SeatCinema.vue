<template>
  <div
    class="
      w-full
      lg:w-[75%]
      xl:w-2/3
      flex
      items-center
      flex-col
      mr-4
      bg-[#1615158a]
      rounded-xl
    "
  >
    <div class="relative flex flex-col items-center mb-10">
      <img class="w-4/5" src="@/assets/img/screen.png" alt="" />
      <img
        class="w-8 h-12 absolute top-14 right-2"
        src="@/assets/img/exit-door.png"
        alt=""
      />
    </div>
    <div
      v-for="(Row, index) in listSeat"
      :key="index"
      class="mt-6 text-center flex justify-evenly w-full md:w-4/5 lg:w-[80%] xl:w-[68%]"
    >
      <Seat
        v-for="(seat, key) in Row"
        :key="key"
        :disabled="isDisabled(seat.status)"
        :class="{
          reserved: !seat.status,
          normal: seat.seatClass === 'normal',
          vip: seat.seatClass === 'vip',
          couple: seat.seatClass === 'couple',
        }"
        @update:select="targetSeat(seat)"
        ><font-awesome-icon
          v-if="seat.seatClass === 'vip'"
          class="
            w-3
            h-3
            sm:w-4 sm:h-4
            absolute
            bottom-[85%]
            text-yellow-400
            rotate-[30deg]
            left-[70%]
          "
          icon="fa-solid fa-crown"
        />
        {{ seat.seat_name }}
      </Seat>
    </div>
    <div class="flex mt-12 justify-center text-center items-center">
      <div class="mr-5 text-[#eae1e1] flex justify-center items-center">
        <button class="w-5 h-5 rounded-md mr-1 bg-[#3834347c]"></button>
        <span>{{ $t('bookTicket.nonOrder') }}</span>
      </div>
      <div class="mr-5 text-[#eae1e1] flex justify-center items-center">
        <button class="w-5 h-5 rounded-md mr-1 bg-[#b01010e6]"></button>
        <span>{{ $t('bookTicket.booked') }}</span>
      </div>
      <div class="mr-5 text-[#eae1e1] flex justify-center items-center">
        <button class="w-5 h-5 rounded-md mr-1 bg-[#85c325e6]"></button>
        <span>{{ $t('bookTicket.selecting') }}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Seat from './Seat.vue'
export default {
  components: { Seat },
  props: {
    listSeat: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    isDisabled(options) {
      if (options) return false
      else return false
    },
    targetSeat(seat) {
      this.$emit('targetSeat', seat)
    },
  },
}
</script>

<style scoped>
.couple{
  width: 80px;
}
</style>