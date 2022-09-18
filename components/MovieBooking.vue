<template>
  <div class="flex flex-col lg:flex-row w-1/2 lg:w-full justify-start">
    <img
      :src="movie[0].photoUrl"
      class="w-4/5 sm:w-[70%] lg:w-1/2 lg:h-[250px] h-[250px] md:h-[350px] sm:h-[300px]"
      alt=""
    />
    <div
      class="
        w-4/5
        sm:w-[70%]
        lg:w-1/2
        text-white
        sm:px-3
        pt-5
        flex flex-col
        justify-evenly
      "
    >
      <router-link
        class="cursor-pointer font-bold text-[#2b0d8c] hover:text-[#6565d2]"
        :to="{
          name: 'index___vi',
        }"
        >{{ $t('bookTicket.movie') }}: {{ movie[0].name }}</router-link
      >
      <p class="">
        {{ $t('bookTicket.cinema') }}
        {{ $t(`bookTicket.${ticketRoom[0].cine_name}`) }}
      </p>
      <p>{{ $t('bookTicket.showTime') }}: {{ ticketRoom[0].show_time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['movie', 'ticketRoom'],
  data() {
    return {
      movie: this.movie,
    }
  },
  created() {},
}
</script>

<style>
</style>