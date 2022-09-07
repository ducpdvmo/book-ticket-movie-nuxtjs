<template>
  <div class="p-6 space-y-6">
    <div class="grid grid-cols-6 gap-6">
      <div class="col-span-6 sm:col-span-3">
        <label
          for="daySchedule"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Day Schedule</label
        >
        <select
          id="daySchedule"
          v-model="data.day"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900
            sm:text-sm
            rounded-lg
            focus:ring-blue-600 focus:border-blue-600
            block
            w-full
            p-2.5
          "
        >
          <option value="null">Vui-lòng-chọn-ngày-chiếu</option>
          <option value="0">Thứ 2</option>
          <option value="1">Thứ 3</option>
          <option value="2">Thứ 4</option>
          <option value="3">Thứ 5</option>
          <option value="4">Thứ 6</option>
          <option value="5">Thứ 7</option>
          <option value="6">Chủ nhật</option>
        </select>
      </div>
      <div class="col-span-6 sm:col-span-3">
        <label for="cinema" class="block mb-2 text-sm font-medium text-gray-900"
          >Cinema</label
        >
        <select
          id="cinema"
          v-model="data.cinema"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900
            sm:text-sm
            rounded-lg
            focus:ring-blue-600 focus:border-blue-600
            block
            w-full
            p-2.5
          "
        >
          <option value="null">Vui-lòng-chọn-rạp-chiếu</option>
          <option value="0">Aeon Mall Hà Đông</option>
          <option value="1">Lotte Mỹ Đình</option>
          <option value="2">Beta Hà Đông</option>
        </select>
      </div>
      <div class="col-start-1 col-end-6">
        <div class="mt-2 p-3 w-40 bg-white border rounded-lg shadow-xl">
          <div class="flex">
            <select
              v-model="data.hours"
              name="hours"
              class="
                hours
                w-[80px]
                text-center
                bg-transparent
                text-xl
                appearance-none
                outline-none
              "
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
            <span class="text-xl mr-3">:</span>
            <select
              v-model="data.minutes"
              name="minutes"
              class="
                bg-transparent
                w-[80px]
                text-center text-xl
                appearance-none
                outline-none
                mr-4
              "
            >
              <option selected value="00">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="30">45</option>
            </select>
            <select
              v-model="data.ampm"
              name="ampm"
              class="bg-transparent text-xl appearance-none outline-none"
            >
              <option selected value="am">AM</option>
              <option value="pm">PM</option>
            </select>
          </div>
        </div>
      </div>
      <div
        v-show="!showMore"
        class="
          col-start-6 col-end-6
          flex
          justify-center
          items-center
          mt-5
          ml-auto
        "
      >
        <button
          class="py-1 px-2 hover:bg-gray-200 rounded-md"
          @click="showMore = true"
        >
          More
          <font-awesome-icon icon="fa-solid fa-angles-right" />
        </button>
      </div>
    </div>
    <div v-show="showMore" class="grid grid-cols-6 gap-6">
      <div class="col-span-6 sm:col-span-3">
        <label
          for="voucher"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Voucher</label
        >
        <div class="flex justify-between">
          <input
            id="voucher"
            type="text"
            class="
              shadow-sm
              bg-gray-50
              border border-gray-300
              text-gray-900
              sm:text-sm
              rounded-lg
              focus:ring-blue-600 focus:border-blue-600
              block
              w-[47%]
              p-2.5
            "
            placeholder="CINE_1205"
          />
          <input
            type="number"
            class="
              shadow-sm
              bg-gray-50
              border border-gray-300
              text-gray-900
              sm:text-sm
              rounded-lg
              focus:ring-blue-600 focus:border-blue-600
              block
              w-[47%]
              p-2.5
            "
            placeholder="%"
          />
        </div>
      </div>
      <div class="col-start-1 col-end-1">
        <button
          class="py-1 px-2 hover:bg-gray-200 rounded-md"
          @click="showMore = false"
        >
          <font-awesome-icon
            class="rotate-180"
            icon="fa-solid fa-angles-right"
          />
          Less
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
      data: {
        day: null,
        cinema: null,
        hours: 0,
        minutes: '00',
        ampm: 'am',
        voucher: null,
      },
    }
  },
  computed: {},
  watch: {
    data: {
      handler() {
        this.$emit('update:data', this.data)
      },
      deep: true,
      immediate: false,
    },
  },
}
</script>

<style scoped>
</style>