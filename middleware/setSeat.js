export default function (context) {
  context.store.dispatch('seatCinema/setSeatSelected', context.req)
  context.store.dispatch('seatCinema/setTotalCost', context.req)
}
