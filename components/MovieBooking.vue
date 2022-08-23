<template>
  <div class="flex justify-start">
    <img :src="movie[0].photoUrl" class="w-1/3 h-[200px]" alt="" />
    <div class="w-2/3 text-white pl-5 flex flex-col justify-evenly">
      <router-link
        class="cursor-pointer font-bold text-[#2b0d8c] hover:text-[#6565d2]"
        :to="{
          name: 'index___vi',
        }"
        >Movie: {{ movie[0].name }}</router-link
      >
      <p class="">Rạp CGV Hà Đông</p>
      <p>Suất: 9:30</p>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['movie'],
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