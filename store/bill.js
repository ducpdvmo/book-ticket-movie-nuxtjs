import axios from 'axios'
export const state = () => ({
  bills: null,
  billOfUser: 1,
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
    axios.post(
      'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Bills.json',
      payload
    )
  },
  getAllBills(context) {
    axios
      .get('https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Bills.json')
      .then((res) => {
        const bills = []
        for (const key in res.data) {
          bills.push({ ...res.data[key] })
        }
        context.commit('setBill', bills)
      })
  },
}
