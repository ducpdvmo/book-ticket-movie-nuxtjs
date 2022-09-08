<template>
  <tr class="px-5 w-full h-16 highlight border-b-[10px] border-[#F1F5F8]">
    <td class="w-40 py-3 px-5">
      <div class="w-10 h-10 mx-auto">
        <img
          alt=""
          class="w-10 h-10 rounded-full"
          :src="movie.photoUrl"
          title=""
        />
      </div>
    </td>
    <td class="text-center">
      <p class="font-medium whitespace-no-wrap">{{ movie.name }}</p>
    </td>
    <td class="w-40">
      <div class="flex items-center justify-center">
        <font-awesome-icon
          class="w-4 h-4 mr-2"
          icon="fa-solid fa-square-check"
        />
        Now Showing
      </div>
    </td>
    <td class="w-56">
      <div class="flex justify-center items-center">
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
        >
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          Edit
        </button>
        <button
          class="
            font-medium
            text-red-600
            hover:bg-red-100
            py-1
            px-2
            rounded-md
            ml-2
          "
          @click="$emit('handle:deleteBill')"
        >
          <font-awesome-icon class="mr-1" icon="fa-solid fa-trash" />
          Xóa
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
tr.highlight td {
  background-color: white;
}
</style>