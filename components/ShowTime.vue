<template>
  <div class="w-full flex items-center flex-col mx-auto xl:mt-10">
    <day-schedule
      v-for="(cinema, key) in cinemas"
      :key="key"
      :cinema="cinema.cinema"
      :cinema-name="cinema.cine_name"
      :logo-cinema="cinema.logo"
    ></day-schedule>
  </div>
</template>

<script>
import DaySchedule from './DaySchedule.vue'
export default {
  components: { DaySchedule },
  props: {
    cinemas: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style>
</style>