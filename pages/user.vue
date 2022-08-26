<template>
  <div
    class="flex w-[1280px] mx-auto bg-[#F1F5F8] p-10 rounded-[30px] mt-40 mb-20"
  >
    <div
      class="
        mr-10
        px-[15px]
        rounded-3xl
        bg-gray-400
      "
    >
      <div class="w-50 mt-4 flex flex-col items-center justify-center">
        <img
          class="w-32 h-32 border-2 p-3 rounded-full"
          src="http://cdn.onlinewebfonts.com/svg/img_510068.png"
          alt=""
        />
        <p class="text-2xl font-bold mt-5 min-w-[200px] text-center">{{user.userName ? user.userName : user.email}}</p>
      </div>
      <div class="mt-5">
        <p class="text-base">Account Detail</p>
        <div class="flex flex-col mt-3 text-lg">
          <nuxt-link class="font-bold" to="/user/profile">Profile</nuxt-link>
        </div>
      </div>
      <div class="flex flex-col justify-center items-start">
        <p class="mt-20 text-base">Other</p>
        <div class="flex flex-col justify-center items-start">
          <button class="font-bold text-lg">Change password</button>
          <button class="font-bold text-lg">Logout</button>
        </div>
      </div>
    </div>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  layout: 'default',
  middleware: ['keepUserLogin', 'check-login'],
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
  },
  created(){}
}
</script>

<style>
</style>