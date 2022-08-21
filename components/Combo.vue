<template>
  <div class="relative shadow-md mt-8 w-ful">
    <table class="w-full text-sm text-gray-900">
      <thead class="text-xs text-gray-700 uppercase">
        <tr>
          <th scope="col" class="py-4 text-center">Combo</th>
          <th scope="col" class="py-4 text-center">Đơn giá</th>
          <th scope="col" class="py-4 text-center">Số lượng</th>
          <th scope="col" class="py-4 text-center">Tổng</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-200">
          <th
            scope="row"
            class="
              font-medium
              text-center text-gray-900
              whitespace-nowrap
              w-1/4
            "
          >
            Combo1
          </th>
          <td class="py-4 text-center w-1/4">60.000 VNĐ</td>
          <td class="py-4 text-center w-1/4">
            <input
              ref="combo1"
              v-model="combo_1"
              min="0"
              max="5"
              class="w-10 text-center"
              type="number"
            />
          </td>
          <td class="py-4 text-center w-1/4">
            {{ (combo_1 * 60000) | formatMoney }} VNĐ
          </td>
        </tr>
        <tr class="border-b border-gray-200">
          <th
            scope="row"
            class="font-medium text-center text-gray-900 whitespace-nowrap"
          >
            Combo2
          </th>
          <td class="py-4 text-center">80.000 VNĐ</td>
          <td class="py-4 text-center">
            <input
              ref="combo2"
              v-model="combo_2"
              min="0"
              max="5"
              class="w-10 text-center"
              type="number"
            />
          </td>
          <td class="py-4 text-center">
            {{ (combo_2 * 80000) | formatMoney }} VNĐ
          </td>
        </tr>
        <tr class="border-b border-gray-200">
          <th
            scope="row"
            class="font-medium text-center text-gray-900 whitespace-nowrap"
          >
            Ticket 2D
          </th>
          <td class="py-4 text-center">90.000 VNĐ</td>
          <td class="py-4 text-center">
            <input
              v-model="seatNameSelectedComputed.length"
              disabled
              class="w-10 text-center"
              type="number"
            />
          </td>
          <td class="py-4 text-center">
            {{ (seatNameSelectedComputed.length * 90000) | formatMoney }} VNĐ
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  filters: {
    formatMoney(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
  inject: ['seatNameSelectedComputed'],
  props: {
    combo1: {
      type: Number,
      required: true,
    },
    combo2: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    combo_1: {
      get() {
        return this.combo1
      },
      set() {
        this.$emit('update:combo1', this.$refs.combo1.value)
      },
    },
    combo_2: {
      get() {
        return this.combo2
      },
      set() {
        this.$emit('update:combo2', this.$refs.combo2.value)
      },
    },
  },
  methods: {},
}
</script>

<style>
</style>