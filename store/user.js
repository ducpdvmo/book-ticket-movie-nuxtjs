import axios from 'axios'
export const state = () => ({
  user: null,
  allUser: null,
})

export const getters = {
  getCurrentUser: (state, getters) => (userId) => {
    return getters.getAllUser.filter((user) => user.uid === userId)
  },
  getUser(state) {
    return state.user
  },
  getAllUser(state) {
    return state.allUser
  },
}
export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setAllUser(state, payload) {
    state.allUser = payload
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
  getAllUser(context) {
    return this.$axios
      .$get('https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Users.json')
      .then((res) => {
        const users = []
        for (const key in res) {
          users.push({ ...res[key], id: key })
        }
        context.commit('setAllUser', users)
      })
      .catch((e) => console.log(e))
  },
  handleKeepUserLogin(context, req) {
    if (req) {
      if (!req.headers.cookie) return false
      const Cookie = req.headers.cookie.split(';')
      const userCookie = Cookie.filter((ck) => {
        return ck.includes('uid')
      })
      if (userCookie.length === 0) return false
      const currentUserUId = userCookie[0].split('=')[1].replace(/%22/g, '')
      context.commit(
        'setUser',
        context.getters.getCurrentUser(currentUserUId)[0]
      )
    } else {
      const currentUserUIdLocal = localStorage.getItem('uid')
      context.commit(
        'setUser',
        context.getters.getCurrentUser(currentUserUIdLocal)[0]
      )
    }
  },
  updateUserById(context, payload) {
    const API =
      'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Users/' +
      payload.id +
      '.json'
    axios.put(API, payload.user)
  },
}
