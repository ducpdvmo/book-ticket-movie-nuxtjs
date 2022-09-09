<template>
  <div class="flex justify-start">
    <img :src="movie[0].photoUrl" class="w-1/3 h-[200px]" alt="" />
    <div class="w-2/3 text-white pl-5 flex flex-col justify-evenly">
      <router-link
        class="cursor-pointer font-bold text-[#2b0d8c] hover:text-[#6565d2]"
        :to="{
          name: 'index___vi',
        }"
        >{{$t('bookTicket.movie')}}: {{ movie[0].name }}</router-link
      >
      <p class="">{{$t('bookTicket.cinema')}} {{$t(`bookTicket.${ticketRoom[0].cine_name}`)}}</p>
      <p>{{$t('bookTicket.showTime')}}: {{ticketRoom[0].show_time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['movie','ticketRoom'],
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