<template>
  <div id="home" class="h-screen text-white">
    <nuxt-link to="/description">Description Movie</nuxt-link>
    <nuxt-link to="/payment">Payment</nuxt-link>
    <button
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      @click="onLogout()"
    >
      Logout
    </button>
  </div>
</template>

<script>
export default {
  layout: 'home',
  computed: {},
  methods: {
    onLogout() {
      this.$store.dispatch('auth/logout')
      this.$router.replace('/auth/login')
    },
  },
}
</script>

<style scoped>
#home {
  background-image: url('../assets/img/banner.png');
  background-position: center center;
  background-size: cover;
}
</style>
