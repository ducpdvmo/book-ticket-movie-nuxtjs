<template>
  <div id="reviews" class="w-full">
    <div class="flex flex-col w-full">
      <div class="flex justify-between items-center mb-10">
        <div class="">
          <h3 class="text-xl">{{ $t('movieDetail.review') }}</h3>
          <h2 class="xl:text-2xl text-xl text-[#6497d9]">
            {{ movie.name }}
          </h2>
        </div>
        <button
          class="
            text-white
            bg-red-700
            hover:bg-red-800
            focus:outline-none focus:ring-4 focus:ring-red-300
            font-medium
            rounded-full
            text-sm
            px-5
            py-2.5
            text-center
            mr-2
            mt-5
          "
        >
          {{ $t('movieDetail.writeReview') }}
        </button>
      </div>
      <div class="container-movie flex items-center justify-between">
        <p>
          {{ $t('movieDetail.found') }}
          <span class="text-[#4280bf] text-base"
            >3 {{ $t('movieDetail.review') }}</span
          >
          {{ $t('movieDetail.inTotal') }}
        </p>
        <div class="relative">
          <label for="filter-review">{{ $t('movieDetail.filterBy') }}:</label>
          <select
            id="filter-review"
            class="
              cursor-pointer
              bg-gray-700
              text-white
              py-2
              xl:font-medium
              xl:py-3
              xl:px-8
              border-gray-500
              leading-tight
              focus:outline-none focus:bg-gray-500 focus:border-gray-500
            "
            @click="showOptions = !showOptions"
          >
            <option value="popularity">
              {{ $t('movieDetail.popularDes') }}
            </option>
            <option value="popularity">
              {{ $t('movieDetail.popularInc') }}
            </option>
            <option value="rating">{{ $t('movieDetail.ratingDes') }}</option>
            <option value="rating">{{ $t('movieDetail.ratingAsc') }}</option>
            <option value="date">{{ $t('movieDetail.releaseDes') }}</option>
            <option value="date">{{ $t('movieDetail.releaseAsc') }}</option>
          </select>
        </div>
      </div>
      <div class="review-container"></div>
    </div>
  </div>
</template>

<script>
export default {
    inject: ['movie'],
    data(){
        return {
            showOptions: false
        }
    }
}
</script>

<style>
</style>