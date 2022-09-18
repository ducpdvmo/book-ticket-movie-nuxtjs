<template>
  <div id="home">
    <div
      v-if="movies"
      class="xl:w-[1280px] 2xl:w-[1380px] flex flex-col justify-center mx-auto"
    >
      <div class="flex justify-end">
        <div class="flex items-center justify-start">
          <p
            class="uppercase mr-4 text-base lg:text-lg text-[#90959b] font-bold"
          >
            {{ $t('home.followUs') }}
          </p>
          <a
            href="#"
            class="
              hover:scale-125
              hover:transition-all
              hover:ease-in-out
              hover:duration-200
            "
            ><font-awesome-icon
              class="text-lg mr-[15px] text-[#abb7c4] hover:text-[#4280bf]"
              icon="fa-brands fa-facebook"
          /></a>
          <a
            href="#"
            class="
              hover:scale-125
              hover:transition-all
              hover:ease-in-out
              hover:duration-200
            "
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
          <a
            href="#"
            class="
              hover:scale-125
              hover:transition-all
              hover:ease-in-out
              hover:duration-200
            "
            ><font-awesome-icon
              class="text-lg mr-[15px] text-[#abb7c4] hover:text-[#dcf836]"
              icon="fa-brands fa-google"
          /></a>
          <a
            href="#"
            class="
              hover:scale-125
              hover:transition-all
              hover:ease-in-out
              hover:duration-200
            "
            ><font-awesome-icon
              class="text-lg mr-[15px] text-[#abb7c4] hover:text-[#E72D23]"
              icon="fa-brands fa-youtube"
          /></a>
        </div>
      </div>
      <div>
        <div class="mb-10">
          <p class="px-[20px] text-lg lg:text-2xl font-bold">
            {{ $t('home.movieShow') }}
          </p>
          <VueSlickCarousel
            ref="slick"
            v-bind="slickOptions"
            class="flex justify-center items-center mt-5"
          >
            <movie
              v-for="movie in movies"
              :key="movie.movie_id"
              class=""
              :movie="movie"
            ></movie>
            <template #prevArrow>
              <div class="custom-arrow relative">
                <font-awesome-icon
                  class="
                    absolute
                    top-[-16px]
                    right-[-10px]
                    w-8
                    h-8
                    text-yellow-500
                  "
                  icon="fa-solid fa-circle-chevron-left"
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
                  "
                  icon="fa-solid fa-circle-chevron-right"
                />
              </div>
            </template>
          </VueSlickCarousel>
        </div>
        <div class="mb-10">
          <p class="px-[20px] text-2xl font-bold">
            {{ $t('home.comingsoon') }}
          </p>
          <VueSlickCarousel
            ref="slick"
            v-bind="slickOptions"
            class="flex justify-center items-center mt-5"
          >
            <movie
              v-for="movie in movies.slice().reverse()"
              :key="movie.movie_id"
              class="w-3/5"
              :movie="movie"
            ></movie>
            <template #prevArrow>
              <div class="custom-arrow">
                <font-awesome-icon
                  class="
                    absolute
                    top-[-16px]
                    right-[-10px]
                    w-8
                    h-8
                    text-yellow-500
                  "
                  icon="fa-solid fa-circle-chevron-left"
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
                  "
                  icon="fa-solid fa-circle-chevron-right"
                />
              </div>
            </template>
          </VueSlickCarousel>
        </div>
      </div>
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
          :to="{ name: `auth-login___${$i18n.locale}` }"
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
  name: 'HomePages',
  components: { VueSlickCarousel, Movie },
  layout: 'home',
  middleware: ['keepUserLogin', 'check-login'],
  data() {
    return {
      slickOptions: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        draggable: true,
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
            breakpoint: 640,
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
    },
    reload() {
      this.$nuxt.refresh()
    },
  },
}
</script>

<style scoped>
.custom-arrow {
  position: relative !important;
  z-index: 3;
}
.custom-arrow.slick-prev {
  left: 30px !important;
}
.custom-arrow.slick-next {
  right: 30px !important;
}
.slick-slider {
  display: flex !important;
}
@media (min-width: 640px) {
  .custom-arrow.slick-prev {
    left: 20px !important;
  }
  .custom-arrow.slick-next {
    right: 20px !important;
  }
}
@media (min-width: 768px) {
  .custom-arrow.slick-prev {
    left: 6px !important;
  }
  .custom-arrow.slick-next {
    right: 6px !important;
  }
}
@media (min-width: 1280px) {
  .custom-arrow.slick-prev {
    left: 8px !important;
  }
  .custom-arrow.slick-next {
    right: 8px !important;
  }
}
@media (min-width: 1536px) {
  .custom-arrow.slick-prev {
    left: 5px !important;
  }
  .custom-arrow.slick-next {
    right: 5px !important;
  }
}
</style>
