<template>
  <div class="slide">
    <nuxt-link
      :to="{ name: `movies-id___${$i18n.locale}`, params: { id: movie.id } }"
      class="relative"
    >
      <div class="relative">
        <img
          class="
            lg:w-[230px] lg:h-[355px]
            xl:w-[270px] xl:h-[400px]
            sm:w-[230px] sm:h-[320px]
            md:w-[200px] md:h-[350px]
            w-[200px]
            h-[300px]
          "
          :src="movie.photoUrl"
          :alt="movie.name"
        />
        <div class="absolute top-0 left-0 bg-[#3838384f] w-full h-full"></div>
      </div>
      <div
        class="
          absolute
          flex flex-col
          justify-center
          items-start
          mb-[20px]
          bottom-0
          left-0
          text-white
          w-full
          ml-1
          pr-1
        "
      >
        <div class="flex mb-2 flex-wrap">
          <span
            v-for="(tag, index) in movie.tags"
            :key="index"
            class="
              py-[4px]
              px-[7px]
              mb-[15px]
              mr-[3px]
              rounded-[3px]
              text-xs
              lg:uppercase
            "
            :class="tag"
            >{{ $t(`home.types.${tag}`) }}</span
          >
        </div>
        <p class="text-base mb-2 lg:uppercase lg:font-bold">{{ movie.name }}</p>
        <p class="bg-[#00000084] py-1 px-3">
          <font-awesome-icon
            class="text-yellow-400 text-2xl mr-2"
            icon="fa-solid fa-star"
          /><span class="text-2xl font-semibold text-red-500">{{
            movie.rating
          }}</span
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
.slide {
  display: flex !important;
  justify-content: center;
  align-items: center;
}
.adventure {
  background-color: #ec5a1a;
}
.comedy {
  background-color: #a6bb16;
}
.horror {
  background-color: #17a261;
}
.superhero {
  background-color: #ec5a1a;
}
.action {
  background-color: #a6bb16;
}
.drama {
  background-color: #17a261;
}
.family {
  background-color: #ec5a1a;
}
.fiction {
  background-color: #a6bb16;
}
.fantasy {
  background-color: #17a261;
}
.animation {
  background-color: #ec5a1a;
}
.LGBT {
  background-color: #a6bb16;
}
</style>
