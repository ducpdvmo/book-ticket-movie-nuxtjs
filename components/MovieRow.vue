<template>
  <tr class="w-full h-24 highlight border-b-[10px] border-[#F1F5F8]">
    <td class="sm:w-40 w-32 py-3 md:px-5">
      <div class="lg:w-14 lg:h-14 sm:w-12 sm:h-12 w-10 h-10 mx-auto">
        <img
          alt=""
          class="lg:w-14 lg:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full"
          :src="movie.photoUrl"
          title=""
        />
      </div>
    </td>
    <td class="text-center">
      <p class="font-medium text-xs sm:text-sm md:text-base whitespace-no-wrap">
        {{ movie.name }}
      </p>
    </td>
    <td class="w-40">
      <div
        class="flex items-center justify-center text-xs sm:text-sm md:text-base"
      >
        <font-awesome-icon
          class="sm:w-4 sm:h-4 w-2 h-2 mr-2"
          icon="fa-solid fa-square-check"
        />
        {{ $t('createSchedule.showing') }}
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
            text-xs
            sm:text-sm
            md:text-base
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
          {{ $t('createSchedule.edit') }}
        </button>
        <button
          class="
            font-medium
            text-red-600
            hover:bg-red-100
            text-xs
            sm:text-sm
            md:text-base
            py-1
            px-2
            rounded-md
            ml-2
          "
          @click="$emit('handle:deleteBill')"
        >
          <font-awesome-icon class="mr-1" icon="fa-solid fa-trash" />
          {{ $t('createSchedule.delete') }}
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