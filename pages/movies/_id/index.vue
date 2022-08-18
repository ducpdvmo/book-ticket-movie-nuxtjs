<template>
  <div>
    <div class="flex relative w-[1280px] mx-auto">
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
      <div class="flex w-full">
        <div class="px-[15px] mr-[30px] mb-[60px] w-1/3">
          <img
            :src="movie.photoUrl"
            alt="movie.name"
            class="w-full h-[500px] mb-10"
          />
          <div class="flex flex-col text-center p-[18px]">
            <button
              class="
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
            >
              <font-awesome-icon class="mr-3" icon="fa-solid fa-play" /> Watch
              Trailer
            </button>
            <button
              class="
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
              />Buy ticket
            </button>
          </div>
        </div>
        <div class="text-white bg-[#00000055] pl-5 w-2/3 mr-[15px]">
          <h1 class="text-4xl text-white font-bold mb-[25px]">
            {{ movie.name }}
            <span class="text-2xl font-medium uppercase text-[#d02a4d]">{{
              movie.year
            }}</span>
          </h1>
          <div class="flex items-center mb-8">
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
              Add to Favorite</a
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
                />share</a
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
            <div class="overview-rate flex items-center px-3 py-2">
              <font-awesome-icon
                class="text-yellow-400 text-4xl mr-2"
                icon="fa-solid fa-star"
              />
              <div class="ml-[10px] text-sm font-normal">
                <span class="text-xl font-semibold text-red-500">{{
                  movie.rating
                }}</span>
                /10 <br />
                <span>0 Reviews</span>
              </div>
            </div>
            <div class="flex ml-[30px] items-center">
              <p class="pr-2 text-2xl font-normal">Rate This Movie:</p>
              <star-rating
                :max-rating="10"
                :rating="movie.rating"
                :read-only="true"
                :star-size="28"
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
            <tabs
              :options="{ useUrlFragment: false }"
              @clicked="tabClicked"
              @changed="tabChanged"
            >
              <tab name="Over View">
                <div id="overview" class="">
                  <div class="flex justify-between">
                    <div class="w-2/3">
                      <p>{{ movie.overView }}</p>
                      <div
                        class="
                          media
                          flex
                          items-center
                          justify-between
                          my-[27px]
                          pb-2
                        "
                      >
                        <h4 class="text-base text-white font-bold uppercase">
                          Media
                        </h4>
                        <a class="text-[#4280bf] text-sm cursor-pointer"
                          >All 5 Videos & 245 Photos
                          <font-awesome-icon
                            class="text-xs"
                            icon="fa-solid fa-chevron-right"
                          />
                        </a>
                      </div>
                      <div
                        class="
                          media
                          flex
                          items-center
                          justify-between
                          my-[27px]
                          pb-2
                        "
                      >
                        <h4 class="text-base text-white font-bold uppercase">
                          cast
                        </h4>
                        <a class="text-[#4280bf] text-sm cursor-pointer"
                          >Full Cast & Crew
                          <font-awesome-icon
                            class="text-xs"
                            icon="fa-solid fa-chevron-right"
                        /></a>
                      </div>
                    </div>
                    <div class="w-1/3">
                      <div class="mb-[30px] ml-[30px]">
                        <h6
                          class="text-base font-bold mb-[10px] text-[#abb7c4]"
                        >
                          Director:
                        </h6>
                        <p>
                          <a>{{ movie.director }}</a>
                        </p>
                      </div>
                      <div class="mb-[30px] ml-[30px]">
                        <h6
                          class="text-base font-bold mb-[10px] text-[#abb7c4]"
                        >
                          Producer:
                        </h6>
                        <p>
                          <a>{{ movie.producer }}</a>
                        </p>
                      </div>
                      <div class="mb-[30px] ml-[30px]">
                        <h6
                          class="text-base font-bold mb-[10px] text-[#abb7c4]"
                        >
                          Genres:
                        </h6>
                        <p>
                          <a
                            v-for="(tag, index) in movie.tags"
                            :key="index"
                            style="cursor: pointer"
                            >{{ tag }}
                          </a>
                        </p>
                      </div>
                      <div class="mb-[30px] ml-[30px]">
                        <h6
                          class="text-base font-bold mb-[10px] text-[#abb7c4]"
                        >
                          Release Date:
                        </h6>
                        <p>May 1, 2015 (U.S.A)</p>
                      </div>
                      <div class="mb-[30px] ml-[30px]">
                        <h6
                          class="text-base font-bold mb-[10px] text-[#abb7c4]"
                        >
                          Run Time:
                        </h6>
                        <p>141 min</p>
                      </div>
                      <div class="mb-[30px] ml-[30px]">
                        <h6
                          class="text-base font-bold mb-[10px] text-[#abb7c4]"
                        >
                          MMPA Rating:
                        </h6>
                        <p>PG-13</p>
                      </div>
                      <div class="mb-[30px] ml-[30px]">
                        <h6
                          class="text-base font-bold mb-[10px] text-[#abb7c4]"
                        >
                          Plot Keywords:
                        </h6>
                        <p class="">
                          <span
                            class="
                              text-xs
                              bg-gray-400
                              rounded-md
                              p-2
                              leading-10
                            "
                            ><a>superhero</a></span
                          >
                          <span
                            class="
                              text-xs
                              bg-gray-400
                              rounded-md
                              p-2
                              leading-10
                            "
                            ><a>marvel universe</a></span
                          >
                          <span
                            class="
                              text-xs
                              bg-gray-400
                              rounded-md
                              p-2
                              leading-10
                            "
                            ><a>comic</a></span
                          >
                          <span
                            class="
                              text-xs
                              bg-gray-400
                              rounded-md
                              p-2
                              leading-10
                            "
                            ><a>blockbuster</a></span
                          >
                          <span
                            class="
                              text-xs
                              bg-gray-400
                              rounded-md
                              p-2
                              leading-10
                            "
                            ><a>final battle</a></span
                          >
                        </p>
                      </div>
                      <div class="mb-14 ml-[30px]">
                        <img
                          class="w-full"
                          src="https://fit.haui.edu.vn/media/76/t76930.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </tab>
              <tab name="Review">
                <div id="reviews" class="tab review">
                  <div class="">
                    <div class="flex justify-between items-center mb-10">
                      <div class="">
                        <h3 class="text-xl">Review Movie</h3>
                        <h2 class="text-2xl text-[#6497d9]">
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
                        Write Review
                      </button>
                    </div>
                    <div
                      class="container-movie flex items-center justify-between"
                    >
                      <p>
                        Found
                        <span class="text-[#4280bf] text-base">3 reviews</span>
                        in total
                      </p>
                      <div class="relative">
                        <label for="filter-review">Filter by:</label>
                        <select
                          id="filter-review"
                          v-click-outside="closePopupOptions"
                          class="
                            appearance-none
                            cursor-pointer
                            bg-gray-700
                            text-white
                            font-medium
                            py-3
                            px-8
                            border-gray-500
                            leading-tight
                            focus:outline-none
                            focus:bg-gray-500
                            focus:border-gray-500
                          "
                          @click="showOptions = !showOptions"
                        >
                          <option value="popularity">
                            Popularity Descending
                          </option>
                          <option value="popularity">
                            Popularity Ascending
                          </option>
                          <option value="rating">Rating Descending</option>
                          <option value="rating">Rating Ascending</option>
                          <option value="date">Release date Descending</option>
                          <option value="date">Release date Ascending</option>
                        </select>
                        <div
                          :class="{
                            active: showOptions,
                            notActive: !showOptions,
                          }"
                          class="
                            pointer-events-none
                            text-3xl
                            absolute
                            inset-y-0
                            right-2.5
                            flex
                            items-center
                            px-2
                            text-white
                            -rotate-90
                          "
                        >
                          <font-awesome-icon icon="fa-solid fa-caret-down" />
                        </div>
                      </div>
                    </div>
                    <div class="review-container"></div>
                  </div>
                </div>
              </tab>
            </tabs>
          </div>
        </div>
      </div>
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
export default {
  components: { MovieSchedule },
  layout: 'home',
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
    }
  },
  computed: {},
  created() {
    this.filterMovieSchedule()
  },
  methods: {
    filterMovieSchedule() {
      const filterMovieScheduleTmp = []
      this.movieschedule.forEach((schedule, key) => {
        filterMovieScheduleTmp.push({ ...schedule })
        schedule.cinemas.forEach((item, index) => {
          if (item.movie_id !== parseInt(this.$route.params.id)) {
            filterMovieScheduleTmp[key].cinemas[index].cinema = null
          }
        })
      })
      this.movieschedule = filterMovieScheduleTmp
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
</style>
