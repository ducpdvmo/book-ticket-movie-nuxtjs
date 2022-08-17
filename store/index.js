export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit(vuexContext) {
    await vuexContext.dispatch('movies/getAllMovies')
    await vuexContext.dispatch('movie-schedule/getAllMovieSchedules')
  },
}
