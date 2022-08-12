import axios from 'axios'
export const state = () => ({
  movies: [],
})
export const getters = {
  movies(state) {
    return state.movies
  },
}
export const mutations = {
  setMovies(state, payload) {
    state.movies = payload
  },
}
export const actions = {
  getAllMovies(vuexContext) {
    return axios
      .get('https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Movies.json')
      .then((response) => {
        const movies = []
        for (const key in response.data) {
          movies.push({ ...response.data[key], id: key })
        }
        vuexContext.commit('setMovies', movies)
      })
      .catch(() => {
        vuexContext.commit('setMovies', [])
      })
  },
  setMovies(context, movies) {
    context.commit('setMovies', movies)
  },
}
