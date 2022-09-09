<template>
  <tr class="bg-white border-b hover:bg-gray-50 text-center">
    <td class="p-4 w-4"><slot></slot></td>
    <th
      scope="row"
      class="w-[30%] py-4 px-6 font-medium text-gray-900 whitespace-wrap"
    >
      {{ bill.movie_name }}
    </th>
    <td class="py-4">{{ bill.show_time }}</td>
    <td class="py-4">{{ bill.seatSelected.length }}</td>
    <td class="py-4">{{ bill.totalPay }}</td>
    <td class="py-4 w-1/5">
      <button
        class="
          font-medium
          text-red-600
          hover:bg-red-100
          py-1
          px-2
          rounded-md
          relative
          after:content-['']
          after:h-full
          after:border-r-[1px]
          after:absolute
          after:top-0
          after:-right-1
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
          px-2
          rounded-md
          ml-2
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