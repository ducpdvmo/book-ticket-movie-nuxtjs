import Cookies from 'js-cookie'

export const state = () => ({
  token: null,
})

export const getters = {
  isLogged(state) {
    return state.token
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
  authenticateUser(context, confirm) {
    return new Promise((resolve, reject) => {
      let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
      if (confirm.isLogin) {
        authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`
      }
      this.$axios
        .$post(authUrlApi, {
          email: confirm.email,
          password: confirm.password,
          returnSecureToken: true,
        })
        .then((result) => {
          context.commit('setToken', result.idToken)
          context.dispatch('setTimerLogout', result.expiresIn * 1000)

          Cookies.set('token', result.idToken)
          Cookies.set(
            'tokenExpiration',
            new Date().getTime() + result.expiresIn * 1000
          )
          resolve({ success: true, result })
        })
        .catch((error) => {
          reject(error.response)
        })
    })
  },
  initAuth(context, request) {
    let token, tokenExpiration
    if (request) {
      if (!request.headers.cookie) return false
      const tokenKey = request.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('token='))
      const tokenExpirationKey = request.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('tokenExpiration='))
      if (!tokenKey || !tokenExpirationKey) {
        // context.dispatch('logout')
        return false
      }
      token = tokenKey.split('=')[1]
      tokenExpiration = tokenExpirationKey.split('=')[1]
    } else {
      token = localStorage.getItem('token')
      tokenExpiration = localStorage.getItem('tokenExpiration')
    }
    if (new Date().getTime() > tokenExpiration || !token) {
      // context.dispatch('logout')
      return false
    }
    context.dispatch('setTimerLogout', tokenExpiration - new Date().getTime())
    context.commit('setToken', token)
  },
  setTimerLogout(context, duration) {
    setTimeout(() => {
      context.commit('clearToken')
    }, duration)
  },
  logout(context) {
    Cookies.remove('token')
    Cookies.remove('tokenExpiration')
    Cookies.remove('currentUser')
    Cookies.remove('seatSelected')
    Cookies.remove('totalCost')
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiration')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('seatSelected')
    localStorage.removeItem('totalCost')
    context.commit('clearToken')
  },
}
