import axios from 'axios'
export const state = () => ({
  bill: null,
  billOfUser: null,
})
export const getters = {
  getBill(state) {
    return state.bill
  },
  getBillOfUser: (state, getters) => (userId) => {
    return getters.getBill.filter((bill) => bill.user_id === userId)
  },
}
export const mutations = {
  setBill(state, payload) {
    state.bill = payload
  },
  setBillOfUser(state, payload) {
    state.billOfUser = payload
  },
}
export const actions = {
  setBillOfUserId(context, payload) {
    let API =
      'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Bills.json'
    if (payload.methods === 'put') {
      API = `https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Bills/${payload.id}.json`
      axios.put(API, payload.dataBill)
    } else axios.post(API, payload.dataBill)
  },
  async getAllBills(context) {
    await axios
      .get('https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Bills.json')
      .then((res) => {
        const bills = []
        for (const key in res.data) {
          bills.push({ ...res.data[key], id: key })
        }
        context.commit('setBill', bills)
      })
      .catch(() => {
        context.commit('setBill', [])
      })
  },
}
