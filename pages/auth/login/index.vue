<template>
  <div
    class="
      w-screen
      h-screen
      flex
      justify-center
      items-center
      bg-gradient-to-br
      from-purple-700
      to-amber-700
    "
  >
    <form
      class="p-10 bg-white rounded-xl drop-shadow-lg space-y-5"
      @submit.prevent="onSubmit"
    >
      <h1 class="text-center text-3xl">LOGIN</h1>
      <div class="flex flex-col space-y-2">
        <label class="text-sm font-light" for="email">Email</label>
        <input
          id="email"
          v-model="email"
          class="w-96 px-3 py-2 rounded-md border border-slate-400"
          type="email"
          placeholder="Your Email"
          name="email"
        />
        <div
          v-if="error !== null && invalid === 'email'"
          class="
            p-4
            mb-4
            text-sm text-red-700
            bg-red-100
            rounded-lg
            dark:bg-red-200 dark:text-red-800
          "
          role="alert"
        >
          {{ error }}
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <label class="text-sm font-light" for="password">Password</label>
        <input
          id="password"
          v-model="password"
          class="w-96 px-3 py-2 rounded-md border border-slate-400"
          type="password"
          placeholder="Your Password"
          name="password"
        />
        <div
          v-if="error !== null && invalid === 'password'"
          class="
            p-4
            mb-4
            text-sm text-red-700
            bg-red-100
            rounded-lg
            dark:bg-red-200 dark:text-red-800
          "
          role="alert"
        >
          {{ error }}
        </div>
      </div>

      <div>
        <input id="remember" type="checkbox" name="remember" />
        <label class="text-sm font-light" for="remember">Remember me</label>
      </div>

      <button
        class="
          w-full
          px-10
          py-2
          bg-blue-600
          text-white
          rounded-md
          hover:bg-blue-500 hover:drop-shadow-md
          duration-300
          ease-in
        "
        type="submit"
      >
        Sign In
      </button>
      <div class="flex items-center justify-between">
        <p class="text-sm font-semibold pt-1 mb-0 mt-2">
          Don't have an account?
          <nuxt-link
            to="/auth/register"
            class="
              text-red-600
              hover:text-red-700
              focus:text-red-700
              transition
              duration-200
              ease-in-out
            "
            >Register</nuxt-link
          >
        </p>
        <p class="text-right mt-2">
          <a
            class="text-blue-600 text-sm font-light hover:underline"
            href="https://www.kindacode.com"
            >Forget Password?</a
          >
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      isLogin: true,
      error: null,
      invalid: null,
    }
  },
  computed: {},
  watch: {
    error(newValue) {
      if (newValue.includes('PASS')) this.invalid = 'password'
      else this.invalid = 'email'
    },
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('auth/authenticateUser', {
          email: this.email,
          password: this.password,
          isLogin: this.isLogin,
        })
        .then(async (e) => {
          localStorage.setItem('token', e.result.idToken)
          localStorage.setItem(
            'tokenExpiration',
            new Date().getTime() + e.result.expiresIn * 1000
          )
          await this.$store.dispatch('user/getUserByUID', e.result.localId)
        })
        .then(() => {
          localStorage.setItem(
            'currentUser',
            JSON.stringify(this.$store.getters['user/getUser'])
          )
          Cookies.set(
            'currentUser',
            JSON.stringify(this.$store.getters['user/getUser'])
          )
          this.$router.push('/')
        })
        .catch((e) => {
          this.error = e.data.error.message
        })
    },
  },
}
</script>
