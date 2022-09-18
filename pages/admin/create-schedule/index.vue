<template>
  <div class="bg-[#F1F5F8] p-5 rounded-2xl min-h-[800px]">
    <div class="flex flex-wrap sm:flex-no-wrap items-center mt-2">
      <button
        class="
          text-white
          bg-purple-700
          hover:bg-purple-800
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2.5
          mb-2
        "
        @click="showAddMovie = true"
      >
        {{ $t('createSchedule.addNewMovie') }}
      </button>
      <div>
        <button class="px-2 text-gray-700">
          <span class="w-5 h-5 flex items-center justify-center">
            <font-awesome-icon class="w-4 h-4" icon="fa-solid fa-plus" />
          </span>
        </button>
      </div>
    </div>
    <div class="overflow-auto mt-16">
      <table class="w-full">
        <thead class="p-5 h-20 border-b">
          <tr>
            <th class="whitespace-no-wrap w-40">
              {{ $t('createSchedule.img') }}
            </th>
            <th class="whitespace-no-wrap w-2/5">
              {{ $t('createSchedule.movieName') }}
            </th>
            <th class="text-center whitespace-no-wrap">
              {{ $t('createSchedule.status') }}
            </th>
            <th class="text-center whitespace-no-wrap">
              {{ $t('createSchedule.action') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <MovieRow
            v-for="(movie, index) in movies"
            v-show="pageSize * page <= index && index < pageSize * (page + 1)"
            :key="index"
            :movie="movie"
          ></MovieRow>
        </tbody>
      </table>
      <Pagination
        class="text-right mr-10"
        :current-page="page"
        :page-size="pageSize"
        :data="movies"
        @page:update="pageUpdate"
      ></Pagination>
    </div>
    <AddNewMovie
      v-if="showAddMovie"
      @closeModalCreateMovie="showAddMovie = false"
    ></AddNewMovie>
  </div>
</template>
  
<script>
import MovieRow from '../../../components/MovieRow.vue'
import AddNewMovie from '../../../components/AddNewMovie.vue'
import Pagination from '../../../components/Pagination.vue'
export default {
  components: { MovieRow, AddNewMovie, Pagination },
  data() {
    return {
      showAddMovie: false,
      pageSize: 5,
      page: 0,
    }
  },
  computed: {
    movies() {
      if (!this.$store.getters['movies/movies'].length) {
        return false
      } else return this.$store.getters['movies/movies']
    },
  },
  created() {},
  methods: {
    pageUpdate(pageNum) {
      this.page = pageNum
    },
  },
}
</script>
  
<style scoped>
</style>