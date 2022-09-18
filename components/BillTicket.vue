<template>
  <tr class="bg-white text-xs sm:text-sm md:text-sm lg:text-base border-b hover:bg-gray-50 text-center">
    <td class="p-4 w-4"><slot></slot></td>
    <th
      scope="row"
      class="w-[30%] py-4 md:px-3 font-medium text-gray-900 whitespace-wrap"
    >
      {{ bill.movie_name }}
    </th>
    <td class="py-4">{{ bill.show_time }}</td>
    <td class="py-4">{{ bill.seatSelected.length }}</td>
    <td class="py-4">{{ bill.totalPay }}</td>
    <td class="py-4 w-1/5 px-3 sm:px-0">
      <button
        class="
          font-medium
          text-red-600
          hover:bg-red-100
          py-1
          sm:pr-2
          px-2
          rounded-md
          relative
          sm:after:border-r-[1px]
          sm:after:absolute
          sm:after:top-0
          sm:after:-right-1
          sm:after:border-b-0
          after:content-['']
          after:border-b-[1px]
          after:w-full
          after:h-full
          after:absolute
          after:left-0
          after:-bottom-px
        "
        @click="$emit('handle:deleteBill')"
      >
        <font-awesome-icon class="mr-1" icon="fa-solid fa-trash" />
        {{$t('bills.delete')}}</button
      ><button
        class="
          font-medium
          text-red-600
          hover:bg-red-100
          py-1
          sm:pl-2
          rounded-md
          px-2
        "
      >
        <font-awesome-icon icon="fa-solid fa-eye" />{{$t('bills.view')}}
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    bill: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>