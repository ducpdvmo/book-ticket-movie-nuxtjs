<template>
  <div class="mb-10 mx-auto">
    <ul class="flex items-center">
      <li class="flex items-center justify-center min-w-[180px]">
        <img
          :src="logoCinema"
          class="w-16 h-16 rounded-full cursor-pointer"
          :alt="cinemaName"
        />
        <span class="text-green-500 font-bold uppercase text-xl ml-5">{{
          cinemaName
        }}</span>
      </li>
      <li v-if="cinema">
        <ul class="ml-[80px] flex">
          <nuxt-link
            v-for="(show_time, index) in cinema.show_time"
            :key="index"
            :to="{
              name: 'bookticket___vi',
              query:{
                movie_id: movieId,
                schedule_id: show_time.schedule_id
              }
            }"
            ><button
              class="
                mx-5
                text-xl
                font-bold
                border
                px-6
                shadow-2xl
                rounded-md
                h-11
                hover:bg-[#5bbd2099]
                hover:scale-125
                hover:ease-in-out
                hover:duration-200
              "
            >
              {{ show_time.time }}
            </button></nuxt-link
          >
        </ul>
      </li>
      <li v-else>
        <p class="ml-24 text-red-600 font-bold uppercase text-base">
          Chưa Có Lịch Chiếu !
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cinema: {
      type: Object,
      default: () => {
        return {
          show_time: [
            {
              schedule_id: 1,
              time: '9:30',
            },
            {
              schedule_id: 1,
              time: '9:30',
            },
            {
              schedule_id: 1,
              time: '9:30',
            },
          ],
        }
      },
    },
    movieId:{
      type: Number,
      required: true
    },
    logoCinema: {
      type: String,
      required: true,
    },
    cinemaName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      redirect: '/',
    }
  },
}
</script>

<style>
</style>