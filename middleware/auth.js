export default function (context) {
  // console.log(context.store.getters.isLogged);
  if (!context.store.getters['auth/isLogged']) {
    context.redirect('/auth/login')
  }
}
