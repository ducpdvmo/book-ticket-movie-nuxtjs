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
      .then(() => {
        context.commit('setUser', currentUser[0])
      })
  },
  handleKeepUserLogin(context, req) {
    let result = {}
    if (req) {
      if (!req.headers.cookie) return false
      const Cookie = req.headers.cookie.split(';')
      const userCookie = Cookie.filter((ck) => {
        return ck.includes('currentUser')
      })
      if (userCookie.length === 0) return false
      const currentUser = userCookie[0]
        .split('=')[1]
        .replace(/%22/g, '')
        .replace('{', '')
        .replace('}', '')
      currentUser.split('%2C').forEach((fiel, key) => {
        const cur = fiel.split(':')
        result[cur[0]] = cur[1]
      })
    } else {
      const currentUserLocal = localStorage.getItem('currentUser')
      result = { ...JSON.parse(currentUserLocal) }
    }
    context.commit('setUser', result)
  },
}
