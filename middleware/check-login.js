export default function (context) {
  console.log(context)
  context.store.dispatch('auth/initAuth', context.req)
}
