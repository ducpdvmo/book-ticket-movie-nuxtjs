import axios from 'axios'
export const state = () => ({
  seatSelected: null,
})
export const getters = {
  getSeatSelected(state) {
    return state.seatSelected
  },
}
export const mutations = {
  setSeatSelected(state, payload) {
    state.seatSelected = payload
  },
}
export const actions = {
  setSeatSelected(context, req) {
    let result = []
    let seat, seatSelected
    if (req) {
      if (!req.headers.cookie) return false
      seat = req.headers.cookie.split(';')[1].split('=')[1]
      seatSelected = seat
        .replace('[{', '')
        .replace('}]', '')
        .replace(/%22/g, '')
        .split('}%2C{')
      console.log(seatSelected)
      seatSelected.forEach((seat, index) => {
        const resultOneSeat = {}
        seat.split('%2C').forEach((fiel, key) => {
          console.log(fiel, key, index)
          const cur = fiel.split(':')
          resultOneSeat[cur[0]] = cur[1]
        })
        result.push(resultOneSeat)
      })
      console.log(result)
    } else {
      const seatSelectedAtLocal = localStorage.getItem('seatSelected')
      result = [...JSON.parse(seatSelectedAtLocal)]
    }
    context.commit('setSeatSelected', result)
  },
	bookedTicket(context, payload){
		const api =
        'https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/TicketRoom/' +
        payload.schedule_id +
        '/listseat/'
			payload.seatSelected.forEach(seat=>{
				if(seat.seat_name.toLowerCase().includes('a')){
					const seatTmp = {...seat}
					seatTmp.status = false
					axios.put(api + 'RowA/' + seat.serial + '.json', seatTmp)
				}else if (seat.seat_name.toLowerCase().includes('b')){
					const seatTmp = {...seat}
					seatTmp.status = false
					axios.put(api + 'RowB/' + seat.serial + '.json', seatTmp)
				}else if (seat.seat_name.toLowerCase().includes('c')){
					const seatTmp = {...seat}
					seatTmp.status = false
					axios.put(api + 'RowC/' + seat.serial + '.json', seatTmp)
				}else if (seat.seat_name.toLowerCase().includes('d')) {
					const seatTmp = {...seat}
					seatTmp.status = false
					axios.put(api + 'RowD/' + seat.serial + '.json', seatTmp)
				}
			})
	}
}
