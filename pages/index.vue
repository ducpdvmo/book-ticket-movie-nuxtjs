<template>
  <div id="home">
    <!-- <div
      id="bg"
      class="absolute top-0 left-0 h-screen w-screen bg-gray-600 z-[-1]"
    ></div> -->
    <div v-if="movies" class="w-[1280px] flex flex-col justify-center mx-auto">
      <div class="flex justify-end">
        <div class="flex items-center justify-start">
          <p class="uppercase mr-4 text-lg text-[#90959b] font-bold">
            Follow us:
          </p>
          <a href="#"
            ><font-awesome-icon
              class="text-lg mr-[15px] text-[#abb7c4] hover:text-[#4280bf]"
              icon="fa-brands fa-facebook"
          /></a>
          <a href="#"
            ><font-awesome-icon
              class="
                text-lg
                mr-[15px]
                text-[#abb7c4]
                hover:bg-[#3EB5EC] hover:text-white
                rounded-full
              "
              icon="fa-brands fa-twitter"
          /></a>
          <a href="#"
            ><font-awesome-icon
              class="text-lg mr-[15px] text-[#abb7c4] hover:text-[#dcf836]"
              icon="fa-brands fa-google"
          /></a>
          <a href="#"
            ><font-awesome-icon
              class="text-lg mr-[15px] text-[#abb7c4] hover:text-[#E72D23]"
              icon="fa-brands fa-youtube"
          /></a>
        </div>
      </div>
      <VueSlickCarousel
        ref="slick"
        v-bind="slickOptions"
        class="flex justify-center items-center mt-5"
      >
        <movie
          v-for="movie in movies"
          :key="movie.movie_id"
          class="mx-5"
          :movie="movie"
        ></movie>
        <template #prevArrow>
          <div class="custom-arrow">
            <font-awesome-icon
              class="absolute top-[-16px] right-[-10px] w-8 h-8 text-yellow-500"
              icon="fa-solid fa-angle-left"
            />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-arrow relative">
            <font-awesome-icon
              class="
                absolute
                top-[-16px]
                left-[-10px]
                w-8
                h-8
                text-yellow-500
                rotate-180
              "
              icon="fa-solid fa-angle-left"
            />
          </div>
        </template>
      </VueSlickCarousel>
    </div>
    <div
      v-else
      class="w-screen flex flex-col justify-center items-center bg-white"
    >
      <h1 class="text-9xl font-extrabold text-red-600 tracking-widest">404</h1>
      <div class="bg-[#FF6A3D] px-2 text-xl font-bold rounded">
        Opps, Something went wrong. Please try again later.
      </div>
      <div>
        <button
          class="
            my-5
            focus:outline-none
            text-white
            bg-red-700
            hover:bg-red-800
            focus:ring-4 focus:ring-red-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            mr-2
            mb-2
            dark:bg-red-600
          "
          @click="reload()"
        >
          Try Again
        </button>
        <nuxt-link
          to="/auth/login"
          class="
            my-5
            focus:outline-none
            text-white
            bg-red-700
            hover:bg-red-800
            focus:ring-4 focus:ring-red-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            mr-2
            mb-2
            dark:bg-red-600
          "
        >
          Login pages
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Movie from '@/components/Movie.vue'
export default {
  components: { VueSlickCarousel, Movie },
  layout: 'home',
  middleware: 'check-call-movies',
  data() {
    return {
      slickOptions: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
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
      if (!this.$store.getters['movies/movies'].length) {
        return false
      } else return this.$store.getters['movies/movies']
    },
  },
  created() {},
  methods: {
    onLogout() {
      this.$store.dispatch('auth/logout')
      this.$router.replace('/auth/login')
      console.log(this.movies)
    },
    reload() {
      this.$nuxt.refresh()
    },
  },
}
</script>

<style scoped></style>
