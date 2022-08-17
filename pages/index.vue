<template>
  <div id="home" class="h-screen text-black">
    <VueSlickCarousel
      ref="slick"
      v-bind="slickOptions"
      class="flex justify-center items-center mt-5 h-[600px]"
    >
      <movie
        v-for="movie in movies"
        :key="movie.movie_id"
        class="mx-5"
        :movie="movie"
      ></movie>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Movie from '@/components/Movie.vue'
export default {
  components: { VueSlickCarousel, Movie },
  layout: 'home',
  data() {
    return {
      slickOptions: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  computed: {
    movies() {
      return this.$store.getters['movies/movies']
    },
  },
  created() {},
  methods: {
    onLogout() {
      this.$store.dispatch('auth/logout')
      this.$router.replace('/auth/login')
      console.log(this.movies)
    },
  },
}
</script>

<style scoped></style>
