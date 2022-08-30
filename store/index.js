export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit(vuexContext) {
    return await Promise.all([
      vuexContext.dispatch('user/getAllUser'),
      vuexContext.dispatch('movies/getAllMovies'),
      vuexContext.dispatch('bill/getAllBills')
    ])
  },
}
