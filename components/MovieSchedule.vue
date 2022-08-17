<template>
  <div class="mx-auto min-w-[800px] w-4/5 bg-[#1f1d1d58] py-10 px-20">
    <tabs
      class="movie-schedule"
      :options="{ useUrlFragment: false }"
      @clicked="tabClicked"
      @changed="tabChanged"
    >
      <tab
        v-for="(schedule, index) in schedules"
        :key="index"
        :name="schedule.date_show"
        ><show-time :cinemas="schedule.cinemas"></show-time
      ></tab>
    </tabs>
  </div>
</template>

<script>
import ShowTime from './ShowTime.vue'
import 'vue-tabs-component/docs/resources/tabs-component.css'
export default {
  components: {
    ShowTime,
  },
  data() {
    return {}
  },
  computed: {
    schedules() {
      return this.$store.getters['movie-schedule/movieSchedules']
    },
  },
  methods: {
    tabClicked(selectedTab) {},
    tabChanged(selectedTab) {},
  },
}
</script>

<style>
</style>