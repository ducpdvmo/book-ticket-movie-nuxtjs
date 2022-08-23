export default function (context) {
  context.store.dispatch('user/handleKeepUserLogin', context.req)
}
