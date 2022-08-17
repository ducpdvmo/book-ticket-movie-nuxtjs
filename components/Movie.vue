<template>
  <div>
    <nuxt-link :to="`/Movies/${movie.id}`" class="relative mr-[15px]">
      <img
        class="w-[285px] h-[437px]"
        :src="movie.photoUrl"
        :alt="movie.name"
      />
      <div
        class="absolute flex flex-col justify-center items-start ml-[30px] mb-[20px] bottom-0 left-0 text-white"
      >
        <div class="flex mb-[15px]]">
          <span
            v-for="(tag, index) in movie.tags"
            :key="index"
            class="py-[3px] px-[5px] mb-[15px] mr-[3px] rounded-[3px] text-xs font-bold uppercase"
            :class="tag"
            >{{ tag }}</span
          >
        </div>
        <p class="text-sm mb-[14px] uppercase font-bold">{{ movie.name }}</p>
        <p class="mb-10">
          <font-awesome-icon
            class="text-yellow-400 text-2xl mr-2"
            icon="fa-solid fa-star"
          /><span class="text-xl">{{ movie.rating }}</span
          >/10
        </p>
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

<style scoped>
.Adventure {
  background-color: #ec5a1a;
}
.Comdy {
  background-color: #a6bb16;
}
.Horror {
  background-color: #830823;
}
</style>
