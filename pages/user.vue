<template>
  <div
    class="flex w-full xl:w-[1280px] mx-auto bg-[#F1F5F8] md:p-10 pt-8 rounded-[30px] mt-40 mb-20"
  >
    <div class="hidden lg:flex flex-col lg:min-h-[600px] lg:mr-10 mr-8 px-[15px] rounded-3xl bg-gray-400">
      <div class="w-50 mt-4 flex flex-col items-center justify-center">
        <img
          class="lg:w-32 lg:h-32 w-24 h-24 border-2 rounded-full"
          :src="user.avatar ? user.avatar : avatarNull"
          alt=""
        />
        <p class="xl:text-2xl text-lg font-bold mt-5 text-center">
          {{ user.userName ? user.userName : user.email }}
        </p>
      </div>
      <div class="mt-5">
        <p class="text-base">{{ $t('profile.accountDetail') }}</p>
        <div class="flex flex-col mt-3 text-lg">
          <nuxt-link
            class="font-bold text-base"
            :to="{ name: `user-profile___${$i18n.locale}` }"
            >{{ $t('profile.profile') }}</nuxt-link
          >
          <nuxt-link
            class="font-bold text-base"
            :to="{ name: `user-bill___${$i18n.locale}` }"
            >{{ $t('profile.bills') }}</nuxt-link
          >
        </div>
      </div>
      <div class="flex flex-col justify-center items-start">
        <p class="mt-20 text-base">{{ $t('profile.other') }}</p>
        <div class="flex flex-col justify-center items-start">
          <button class="font-bold text-base">
            {{ $t('profile.changePass') }}
          </button>
          <button class="font-bold text-base">{{ $t('profile.logout') }}</button>
        </div>
      </div>
    </div>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  layout: 'default',
  middleware: ['keepUserLogin', 'check-login', 'auth'],
  data(){
    return{
      avatarNull: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
  },
  created() {},
}
</script>

<style>
</style>