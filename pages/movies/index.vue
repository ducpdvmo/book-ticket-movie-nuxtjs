<template>
  <div class="">
    <movie-schedule></movie-schedule>
  </div>
</template>

<script>
import MovieSchedule from '../../components/MovieSchedule.vue'
export default {
  components: { MovieSchedule },
  layout: 'home',
  data(){
    return {}
  },
  computed: {
    filterMovies() {
      return this.$store.getters['movie-schedule/getFilterMovieSchedule']
    },
  },
  created(){
    // this.$store.dispatch('movie-schedule/filterMovieScheduleWithMovieID',1)
  },
  mounted(){},
}
</script>

<style></style>
