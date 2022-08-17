import axios from 'axios'
export const state = () => ({
  movieSchedules: null,
  filterMovieSchedule: null,
})
export const getters = {
  movieSchedules(state) {
    return state.movieSchedules
  },
  getFilterMovieSchedule(state) {
    return state.filterMovieSchedule
  },
}
export const mutations = {
  setMovieSchedule(state, payload) {
    state.movieSchedules = payload
  },
  setFilterMovieSchedule(state, payload) {
    state.filterMovieSchedule = payload
  },
}
export const actions = {
  getAllMovieSchedules(vuexContext) {
    return axios
      .get(
        'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/MovieSchedules.json'
      )
      .then((response) => {
        const movieSchedules = []
        for (const key in response.data) {
          movieSchedules.push({ ...response.data[key] })
        }
        vuexContext.commit('setMovieSchedule', movieSchedules)
      })
      .catch((e) => {
        console.log(e)
        vuexContext.commit('setMovieSchedule', null)
      })
  },
  filterMovieScheduleWithMovieID(vuexContext, payload) {
    const filterMovieSchedule = []
    vuexContext.getters.movieSchedules.forEach((schedule,key) => {
      filterMovieSchedule.push({ ...schedule })
      console.log(filterMovieSchedule);
      schedule.cinemas.forEach((item,index) => {
        if (item.movie_id !== payload) {
          filterMovieSchedule[key].cinemas[index].cinema = null
        }
      })
    })
    vuexContext.commit('setFilterMovieSchedule', filterMovieSchedule)
  }
}
