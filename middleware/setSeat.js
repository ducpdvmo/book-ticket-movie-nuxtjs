export default function (context) {
    context.store.dispatch('seatCinema/setSeatSelected', context.req)
  }
  