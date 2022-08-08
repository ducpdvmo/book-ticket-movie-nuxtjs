export default function (context) {
  console.log(context.req)
  context.store.auth.dispatch('auth/initAuth', context.req)
}
