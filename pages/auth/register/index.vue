<template>
  <div
    class="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-purple-700 to-amber-700"
  >
    <form
      class="p-10 bg-white rounded-xl drop-shadow-lg space-y-5"
      @submit.prevent="onSubmit"
    >
      <h1 class="text-center text-3xl">Register</h1>
      <div class="flex flex-col space-y-2">
        <label class="text-sm font-light" for="email">Email</label>
        <input
          id="email"
          v-model="email"
          class="w-96 px-3 py-2 rounded-md border border-slate-400"
          type="email"
          placeholder="Your Email"
          name="email"
          @blur="checkValidate()"
        />
        <div
          v-if="error !== null && invalid === 'email'"
          class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
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
          @blur="checkValidate()"
        />
        <div
          v-if="error !== null && invalid === 'password'"
          class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          {{ error }}
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <label class="text-sm font-light" for="rePassword">Re-Password</label>
        <input
          id="rePassword"
          v-model="rePassword"
          class="w-96 px-3 py-2 rounded-md border border-slate-400"
          type="password"
          placeholder="Type Re-password"
          name="rePassword"
        />
        <div
          v-if="!checkValidateRePassword"
          class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
          @blur="checkValidate()"
        >
          Password does not match
        </div>
      </div>

      <button
        class="w-full px-10 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
        type="submit"
      >
        Register
      </button>
      <p class="text-sm font-semibold mt-2 pt-1 mb-0">
        Have an account yet?
        <nuxt-link
          to="/auth/login"
          class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
          >Login</nuxt-link
        >
      </p>
    </form>
  </div>
</template>
<script>
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
      console.log(this.invalid)
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
          .dispatch('authenticateUser', {
            email: this.email,
            password: this.password,
            isLogin: this.isLogin,
          })
          .then(() => this.$router.push('/auth/login'))
          .catch((e) => {
            this.error = e.data.error.message
          })
      } else this.checkValidateRePassword = false
    },
  },
}
</script>
