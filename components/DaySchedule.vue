<template>
  <div class="mb-10 w-full flex justify-center">
    <ul class="flex items-center justify-between sm:w-4/5 md:w-3/5 w-full">
      <li class="flex items-center justify-center xl:min-w-[180px]">
        <img
          :src="logoCinema"
          class="xl:w-16 xl:h-16 w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer"
          :alt="cinemaName"
        />
        <span class="text-green-500 font-bold uppercase xl:text-xl lg:text-sm text-xs ml-5">{{
          $t(`bookTicket.${cinemaName}`)
        }}</span>
      </li>
      <li v-if="cinema.show_time.length">
        <ul class="xl:ml-[80px] flex">
          <nuxt-link
            v-for="(show_time, index) in cinema.show_time"
            :key="index"
            :to="{
              name: `bookticket___${$i18n.locale}`,
              query: {
                movie_id: show_time.movie_id,
                schedule_id: show_time.schedule_id,
              },
            }"
            ><button
              class="
                mx-5
                xl:text-xl
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
        <p class="xl:ml-24 text-red-600 font-bold uppercase lg:text-sm xl:text-base text-xs">
          {{ $t('movieDetail.noShowTime') }}
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
              movie_id: 1,
              schedule_id: 1,
              time: '9:30',
            },
            {
              movie_id: 1,
              schedule_id: 1,
              time: '9:30',
            },
            {
              movie_id: 1,
              schedule_id: 1,
              time: '9:30',
            },
          ],
        }
      },
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