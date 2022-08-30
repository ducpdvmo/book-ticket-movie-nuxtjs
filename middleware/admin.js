export default function (context) {
  context.store.dispatch('user/handleKeepUserLogin', context.req)
  if (!context.store.getters['user/checkAdmin']) {
    context.redirect('/')
  }
}
