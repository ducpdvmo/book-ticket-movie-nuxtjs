<template>
  <div
    class="
      mx-auto
      min-w-[800px]
      w-4/5
      bg-[#fffefec4]
      py-10
      px-20
      flex
      justify-center
      flex-col
    "
  >
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
    <button
      class="
        min-w-[200px]
        mx-auto
        focus:outline-none
        text-white
        bg-red-700
        hover:bg-red-800
        focus:ring-4 focus:ring-red-300
        font-medium
        rounded-lg
        text-sm
        px-5
        py-2.5
        my-2
        uppercase
      "
      @click="$emit('closeSchedule')"
    >
      close
    </button>
  </div>
</template>

<script>
import ShowTime from './ShowTime.vue'
import 'vue-tabs-component/docs/resources/tabs-component.css'
export default {
  components: {
    ShowTime,
  },
  props: {
    schedules: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    tabClicked(selectedTab) {},
    tabChanged(selectedTab) {},
  },
}
</script>

<style>
</style>