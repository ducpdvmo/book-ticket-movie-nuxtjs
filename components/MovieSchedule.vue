<template>
  <div
    class="
      mx-auto
      xl:min-w-[800px]
      w-full
      bg-[#fffefec4]
      lg:w-4/5
      xl:py-10
      flex
      justify-start
      flex-col
      z-50
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
        :name="$t(`movieDetail.${schedule.date_show}`)"
        ><show-time :cinemas="schedule.cinemas"></show-time
      ></tab>
    </tabs>
    <button
      class="
        xl:min-w-[200px]
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
      {{ $t('movieDetail.close') }}
    </button>
  </div>
</template>

<script>
import ShowTime from './ShowTime.vue'
import 'vue-tabs-component/docs/resources/tabs-component.css'
export default {
  components: { ShowTime },
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