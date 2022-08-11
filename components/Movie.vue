<template>
  <div>
    <nuxt-link :to="`/Movies/${movie.id}`" class="relative">
      <img
        class="w-[285px] h-[437px]"
        :src="movie.photoUrl"
        :alt="movie.name"
      />
      <div
        class="absolute flex justify-center items-start ml-[30px] mb-[20px] flex-col w-full bottom-0 left-0 text-white"
      >
        <p>{{ movie.tags }}</p>
        <p>{{ movie.name }}</p>
        <p>{{ movie.rating }}/10</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    movies() {
      return this.$store.getters['movies/movies']
    },
  },
}
</script>

<style></style>
