<template>
  <div>
    <div class="flex xl:w-[1280px] mx-auto">
      <div
        class="
          bg-overview-movie-page
          w-screen
          h-screen
          fixed
          top-0
          left-0
          bg-[#1c1b1bc0]
        "
        :style="{
          'background-image': 'url(' + movie.backgroundUrl + ')',
        }"
      ></div>
      <div class="flex w-full flex-col lg:flex-row">
        <div
          class="
            flex flex-col
            justify-center
            items-center
            px-[15px]
            mx-auto
            mb-[60px]
            w-full
            sm:w-4/5
            md:w-3/5
            lg:w-1/3 lg:justify-start
          "
        >
          <img
            :src="movie.photoUrl"
            alt="movie.name"
            class="
              w-4/5
              sm:w-3/5
              md:h-[350px]
              h-[300px]
              lg:h-[400px] lg:w-4/5
              mb-10
            "
          />
          <div
            class="
              flex flex-col
              justify-center
              items-center
              text-center
              xl:p-[18px]
              w-full
            "
          >
            <button
              class="
                w-3/5
                xl:w-4/5
                focus:outline-none
                text-white
                bg-red-700
                hover:bg-red-800 hover:text-white
                font-bold
                rounded-lg
                text-sm
                px-5
                py-2.5
                mb-[15px]
              "
              @click="showTrailerModal = true"
            >
              <font-awesome-icon class="mr-3" icon="fa-solid fa-play" />
              {{ $t('movieDetail.watchTrailer') }}
            </button>
            <button
              class="
                w-3/5
                xl:w-4/5
                focus:outline-none
                text-white
                bg-yellow-400
                hover:bg-yellow-500
                focus:ring-4 focus:ring-yellow-300
                font-bold
                uppercase
                rounded-lg
                text-sm
                px-5
                py-2.5
                mb-2
              "
              @click="showMovieSchedule"
            >
              <font-awesome-icon
                class="mr-3"
                icon="fa-solid fa-credit-card"
              />{{ $t('movieDetail.buyTicket') }}
            </button>
          </div>
        </div>
        <div class="text-white bg-[#00000055] pl-5 w-full lg:w-2/3 mr-[15px]">
          <h1
            class="
              text-2xl
              xl:text-4xl
              text-white text-center
              lg:text-left
              font-bold
              mb-[25px]
            "
          >
            {{ movie.name }}
            <span
              class="text-xl xl:text-2xl font-medium uppercase text-[#d02a4d]"
              >{{ movie.year }}</span
            >
          </h1>
          <div class="flex items-center justify-center lg:justify-start mb-8">
            <a
              href="#"
              class="
                text-[#dd003f] text-sm
                font-bold
                uppercase
                mr-[35px]
                flex
                items-center
              "
              ><font-awesome-icon
                icon="fa-solid fa-heart"
                class="
                  text-white
                  w-6
                  h-6
                  p-1.5
                  mr-2
                  rounded-full
                  border border-dashed border-white
                "
              />
              {{ $t('movieDetail.addToFavorite') }}</a
            >
            <div class="flex items-center justify-center focus-share">
              <a
                href="#"
                class="
                  text-[#dd003f] text-sm
                  font-bold
                  uppercase
                  mr-[35px]
                  text-center
                  flex
                  items-center
                "
                ><font-awesome-icon
                  icon="fa-solid fa-share-nodes"
                  class="
                    text-red-600
                    w-6
                    h-6
                    p-1.5
                    rounded-full
                    border border-dashed border-red-500
                    mr-2
                  "
                />{{ $t('movieDetail.share') }}</a
              >
              <div
                class="
                  hidden
                  share
                  items-center
                  px-3
                  bg-[#dd003f67]
                  rounded-md
                  py-2
                  relative
                "
              >
                <a href="#" class="mx-[10px] px-1 rounded-full text-base"
                  ><font-awesome-icon
                    class="text-white"
                    icon="fa-brands fa-facebook"
                /></a>
                <a href="#" class="mx-[10px] px-1 rounded-full text-base"
                  ><font-awesome-icon
                    class="text-white"
                    icon="fa-brands fa-twitter"
                /></a>
                <a href="#" class="mx-[10px] px-1 rounded-full text-base"
                  ><font-awesome-icon
                    class="text-white"
                    icon="fa-brands fa-google"
                /></a>
                <a href="#" class="mx-[10px] px-1 rounded-full text-base"
                  ><font-awesome-icon
                    class="text-white"
                    icon="fa-brands fa-youtube"
                /></a>
              </div>
            </div>
          </div>
          <div class="rate-star flex items-center mb-[70px]">
            <div class="overview-rate flex flex-col items-center px-3 py-2">
              <font-awesome-icon
                class="text-yellow-400 xl:text-4xl mr-2"
                icon="fa-solid fa-star"
              />
              <div class="ml-[10px] text-sm font-normal">
                <span class="text-xl font-semibold text-red-500">{{
                  movie.rating
                }}</span>
                /10 <br />
                <span>0 {{ $t('movieDetail.review') }}</span>
              </div>
            </div>
            <div class="flex flex-col ml-[30px] items-center">
              <p class="pr-2 xl:text-2xl font-normal">
                {{ $t('movieDetail.rateMovie') }}
              </p>
              <star-rating
                :max-rating="10"
                :rating="movie.rating"
                :read-only="true"
                :star-size="20"
                :show-rating="false"
                :border-width="0.5"
                border-color="#9BA6B2"
                inactive-color="#040506"
                active-color="#ffbd00"
                :increment="0.5"
              ></star-rating>
            </div>
          </div>
          <div>
            <TabsCus
              :my-style="{
                containTitle: 'flex mb-5 justify-center lg:justify-start',
                title: 'px-4 border-b-[1px] mr-3',
              }"
              :tab-items="tabs"
            >
            </TabsCus>
          </div>
        </div>
      </div>
    </div>
    <div>
      <ModalTrailer
        v-show="showTrailerModal"
        :video-id="movie?.trailerID ? movie.trailerID : 'o4NzWTNqSto'"
        @closeTrailer="showTrailerModal = false"
      ></ModalTrailer>
    </div>
    <div
      v-if="showTableSchedule"
      class="
        fixed
        top-0
        left-0
        flex
        items-center
        w-full
        h-full
        bg-[#191a19bb]
        justify-center
        z-50
      "
    >
      <MovieSchedule
        :schedules="movieschedule"
        @closeSchedule="showTableSchedule = false"
      ></MovieSchedule>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import 'vue-tabs-component/docs/resources/tabs-component.css'
import MovieSchedule from '../../../components/MovieSchedule.vue'
import OverView from '../../../components/OverView.vue'
import Review from '../../../components/Review.vue'
import ModalTrailer from '../../../components/ModalTrailer.vue'
export default {
  name: 'MovieDetail',
  components: { MovieSchedule, ModalTrailer },
  provide() {
    return {
      movie: this.movie,
    }
  },
  layout: 'home',
  middleware: ['keepUserLogin', 'check-login'],
  async asyncData(context) {
    const movie = await axios.get(
      `https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Movies/${context.route.params.id}.json`
    )
    const movieschedule = await axios.get(
      'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/MovieSchedules.json'
    )
    return {
      movie: movie.data,
      movieschedule: movieschedule.data,
    }
  },
  data() {
    return {
      showOptions: false,
      showTableSchedule: false,
      tabs: [
        { title: 'overView', component: OverView },
        {
          title: 'review',
          component: Review,
        },
      ],
      sizeStar: null,
      showTrailerModal: false,
    }
  },
  computed: {},
  created() {
    this.filterMovieSchedule()
  },
  mounted() {
    if (window.innerWidth < 640) this.sizeStar = 1
  },
  methods: {
    filterMovieSchedule() {
      this.movieschedule.forEach((schedule, index) => {
        schedule.cinemas.forEach((item, index) => {
          item.cinema.show_time = [...Object.values(item.cinema.show_time)]
          item.cinema.show_time = item.cinema.show_time.filter(
            (item) =>
              item.movie_id.toString() === this.$route.params.id.toString()
          )
        })
      })
    },
    closePopupOptions() {
      this.showOptions
        ? (this.showOptions = !this.showOptions)
        : (this.showOptions = false)
    },
    showMovieSchedule() {
      this.showTableSchedule = true
    },
    tabClicked(selectedTab) {},
    tabChanged(selectedTab) {},
  },
}
</script>

<style scoped>
.bg-overview-movie-page {
  z-index: -2;
  background-size: cover;
  background-position: center center;
}
.focus-share:hover .share {
  display: flex;
}
.share a:hover {
  transform: scale(1.5);
}
.share a:nth-child(1):hover {
  background-color: #4280bf;
}
.share a:nth-child(2):hover {
  background-color: #3eb5ec;
}
.share a:nth-child(3):hover {
  background-color: #b8d02e;
}
.share a:nth-child(4):hover {
  background-color: #e72d23;
}
.share::before {
  position: absolute;
  content: '';
  width: 0px;
  height: 0px;
  left: -10px;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  border-right: 10px solid #dd003f67;
}
.rate-star {
  border-top: 1px solid #405266;
  border-bottom: 1px solid #405266;
  margin-bottom: 70px;
}
.overview-rate {
  border-right: 1px solid red;
}
.tabs-component-tabs {
  display: flex;
}
.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
  width: 300px;
}
.tabs-component-tab.is-active a {
  color: #dcf836 !important;
}
.media {
  border-bottom: 1px solid #233a50;
}
.container-movie {
  border-top: 1px solid #405266;
  border-bottom: 1px solid #405266;
  border-right: 1px solid #405266;
}
#filter-review {
  border-left: 1px solid #405266;
}
#filter-review * {
  background-color: transparent;
}
.active {
  transition: all 0.1s linear;
  rotate: 90deg;
}
.notActive {
  transition: all 0.1s linear;
  rotate: 0deg;
}
.vue-star-rating[data-v-fde73a0c] {
  display: flex;
  flex-wrap: wrap !important;
}
</style>
