import axios from 'axios'
export const state = () => ({
  movieSchedules: null,
  filterMovieSchedule: null,
})
export const getters = {
  movieSchedules(state) {
    return state.movieSchedules
  },
}
export const mutations = {
  setMovieSchedule(state, payload) {
    state.movieSchedules = payload
  },
}
export const actions = {
  async getAllMovieSchedules(vuexContext) {
    await axios
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
        vuexContext.commit('setMovieSchedule', null)
      })
  },
}
