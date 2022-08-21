<template>
  <div class="mt-10">
    <label class="title"
      >Vị Trí Đã Chọn: {{ seatNameSelectedComputed.length }}</label
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
        v-if="seatNameSelectedComputed.length == 0"
        class="text-lg font-bold text-center mt-8 text-red-600 mx-auto"
      >
        Chưa chọn ghế!
      </p>
      <button
        v-for="seat in seatNameSelectedComputed"
        :key="seat"
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
      >
        {{ seat }}
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ['seatNameSelectedComputed'],
}
</script>

<style>
</style>