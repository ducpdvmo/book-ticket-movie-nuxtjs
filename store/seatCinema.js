import axios from 'axios'
export const state = () => ({
  seatSelected: null,
  totalCost: 0,
})
export const getters = {
  getSeatSelected(state) {
    return state.seatSelected
  },
  getTotalCost(state) {
    return state.totalCost
  },
}
export const mutations = {
  setSeatSelected(state, payload) {
    state.seatSelected = payload
  },
  setTotalCost(state, payload) {
    state.totalCost = payload
  },
}
export const actions = {
  setSeatSelected(context, req) {
    let result = []
    let seat, seatSelected
    if (req) {
      if (!req.headers.cookie) return false
      seat = req.headers.cookie.split(';')
      seatSelected = seat
        .filter((cookie) => {
          return cookie.includes('seatSelected')
        })[0]
        .split('=')[1]
        .replace('[{', '')
        .replace('}]', '')
        .replace(/%22/g, '')
        .split('}%2C{')
      seatSelected.forEach((seat, index) => {
        const resultOneSeat = {}
        seat.split('%2C').forEach((fiel, key) => {
          const cur = fiel.split(':')
          resultOneSeat[cur[0]] = cur[1]
        })
        result.push(resultOneSeat)
      })
    } else {
      const seatSelectedAtLocal = localStorage.getItem('seatSelected')
      result = [...JSON.parse(seatSelectedAtLocal)]
    }
    context.commit('setSeatSelected', result)
  },
  setTotalCost(context, req) {
    let result
    if (req) {
      if (!req.headers.cookie) return false
      const cookies = req.headers.cookie.split(';')
      const cost = cookies.filter((cookie) => cookie.includes('totalCost'))
      result = JSON.parse(cost[0].split('=')[1])
    } else {
      const cost = localStorage.getItem('totalCost')
      result = JSON.parse(cost)
    }
    context.commit('setTotalCost', result)
  },
  bookedTicket(context, payload) {
    const api =
      'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/TicketRoom/' +
      payload.schedule_id +
      '/listseat/'
    payload.seatSelected.forEach((seat) => {
      if (seat.seat_name.toLowerCase().includes('a')) {
        const seatTmp = { ...seat }
        seatTmp.status = false
        axios.put(api + 'RowA/' + seat.serial + '.json', seatTmp)
      } else if (seat.seat_name.toLowerCase().includes('b')) {
        const seatTmp = { ...seat }
        seatTmp.status = false
        axios.put(api + 'RowB/' + seat.serial + '.json', seatTmp)
      } else if (seat.seat_name.toLowerCase().includes('c')) {
        const seatTmp = { ...seat }
        seatTmp.status = false
        axios.put(api + 'RowC/' + seat.serial + '.json', seatTmp)
      } else if (seat.seat_name.toLowerCase().includes('d')) {
        const seatTmp = { ...seat }
        seatTmp.status = false
        axios.put(api + 'RowD/' + seat.serial + '.json', seatTmp)
      }
    })
  },
}
