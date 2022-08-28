export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit(vuexContext) {
    await Promise.all([
      vuexContext.dispatch('user/getAllUser'),
      vuexContext.dispatch('movies/getAllMovies')
    ])
  },
}
