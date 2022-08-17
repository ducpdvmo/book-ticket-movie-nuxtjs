export default function (context) {
  if (!context.store.getters['auth/isLogged']) {
    context.redirect('/auth/login')
  }
}
