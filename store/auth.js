import Cookies from 'js-cookie'

export const state = () => ({
  token: null,
})

export const getters = {
  isLogged(state) {
    return state.token != null
  },
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
}

export const actions = {
  authenticateUser(context, payload) {
    return new Promise((resolve, reject) => {
      let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
      if (payload.isLogin) {
        authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`
      }
      this.$axios
        .$post(authUrlApi, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        })
        .then((result) => {
          context.commit('setToken', result.idToken)
          context.dispatch('setTimerLogout', result.expiresIn * 1000)

          Cookies.set('token', result.idToken)

          resolve({ success: true, result })
        })
        .catch((error) => {
          reject(error.response)
        })
    })
  },
  initAuth(context, req) {
    let token
    if (req) {
      if (!req.headers.cookie) return false
      const tokenKey = req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('token='))
      const tokenExpirationKey = req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('tokenExpiration='))
      if (!tokenKey || !tokenExpirationKey) {
        context.dispatch('logout')
        return false
      }
      token.idToken = tokenKey.split('=')[1]
      token.expirationToken = tokenExpirationKey.split('=')[1]
    } else {
      // eslint-disable-next-line prefer-const
      token = localStorage.getItem('token')
      if (new Date().getTime() > token.expirationToken || !token.idToken)
        context.dispatch('logout')
      return false
    }
  },
  setTimerLogout(context, duration) {
    setTimeout(() => {
      context.commit('clearToken')
    }, duration)
  },
  logout(context) {
    Cookies.remove('token')
    localStorage.removeItem('token')
    context.commit('clearToken')
    console.log(context.getters.isLogged)
  },
}
