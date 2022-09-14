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
      class="
        p-10
        bg-white
        my-32
        rounded-xl
        drop-shadow-lg
        space-y-5
        mx-auto
        w-[90%]
        sm:w-4/5
        md:w-3/5
        lg:w-1/2
        xl:w-2/5
        flex flex-col
        items-center
      "
      @submit.prevent="onSubmit"
    >
      <h1 class="text-center text-3xl">Register</h1>
      <div class="flex flex-col items-center justify-center space-y-2 w-full sm:w-96">
        <div class="flex flex-col w-full">
          <label class="text-sm text-left font-light" for="email">Email</label>
          <input
            id="email"
            v-model="email"
            class="sm:w-96 px-3 py-2 rounded-md border border-slate-400"
            type="email"
            placeholder="Your Email"
            name="email"
            @blur="checkValidate()"
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
      </div>
      <div class="flex flex-col items-center justify-center space-y-2 w-full sm:w-96">
        <div class="flex flex-col w-full">
          <label class="text-sm text-left font-light" for="password"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            class="sm:w-96 px-3 py-2 rounded-md border border-slate-400"
            type="password"
            placeholder="Your Password"
            name="password"
            @blur="checkValidate()"
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
      </div>
      <div class="flex flex-col items-center justify-center space-y-2 w-full sm:w-96">
        <div class="flex flex-col w-full">
          <label
            class="text-sm text-left font-light float-left"
            for="rePassword"
            >Re-Password</label
          >
          <input
            id="rePassword"
            v-model="rePassword"
            class="sm:w-96 px-3 py-2 rounded-md border border-slate-400"
            type="password"
            placeholder="Type Re-password"
            name="rePassword"
          />
          <div
            v-if="!checkValidateRePassword"
            class="
              p-4
              mb-4
              text-sm text-red-700
              bg-red-100
              rounded-lg
              dark:bg-red-200 dark:text-red-800
            "
            role="alert"
            @blur="checkValidate()"
          >
            Password does not match
          </div>
        </div>
      </div>

      <button
        class="
          sm:w-96
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
        Register
      </button>
      <p class="text-sm font-semibold mt-2 pt-1 mb-0">
        Have an account yet?
        <nuxt-link
          :to="{ name: `auth-login___${$i18n.locale}` }"
          class="
            text-red-600
            hover:text-red-700
            focus:text-red-700
            transition
            duration-200
            ease-in-out
          "
          >Login</nuxt-link
        >
      </p>
    </form>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      email: '',
      password: '',
      rePassword: '',
      isLogin: false,
      error: null,
      invalid: null,
      checkValidateRePassword: true,
    }
  },
  watch: {
    error(newValue) {
      if (newValue.includes('PASS')) this.invalid = 'password'
      else this.invalid = 'email'
    },
  },
  methods: {
    checkValidate() {
      this.invalid = null
      this.checkValidateRePassword = true
    },
    onSubmit() {
      if (this.password === this.rePassword) {
        this.$store
          .dispatch('auth/authenticateUser', {
            email: this.email,
            password: this.password,
            isLogin: this.isLogin,
          })
          .then(async (res) => {
            localStorage.setItem('token', res.result.idToken)
            localStorage.setItem(
              'tokenExpiration',
              new Date().getTime() + res.result.expiresIn * 1000
            )
            localStorage.setItem('uid', res.result.localId)
            Cookies.set('uid', res.result.localId)
            const newUser = {
              userName: '',
              email: this.email,
              uid: res.result.localId,
              avatar:
                'https://support.pega.com/sites/default/files/pega-user-image/357/REG-356652.png',
            }
            await this.$store.dispatch('user/initUser', newUser)
            this.$store.commit('user/setUser', newUser)
          })
          .then(() => {
            this.$router.push('/')
          })
          .catch((e) => {
            this.error = e.data.error.message
          })
      } else this.checkValidateRePassword = false
    },
  },
}
</script>
