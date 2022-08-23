export const state = () => ({
  user: null,
})

export const getters = {
  getUser(state) {
    return state.user
  },
}
export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
}

export const actions = {
  initUser(context, payload) {
    return this.$axios
      .$post(
        'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Users.json',
        payload
      )
      .then((res) => {})
      .catch((e) => console.log(e))
  },
  getUserByUID(context, payload) {
    let currentUser
    return this.$axios
      .$get('https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Users.json')
      .then((res) => {
        const user = []
        for (const key in res) {
          user.push({ ...res[key] })
        }
        currentUser = user.filter((user) => user.uid === payload)
      })
      .then(()=>{
        context.commit('setUser', currentUser[0])
      })
  },
}
