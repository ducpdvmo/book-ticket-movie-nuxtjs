<template>
  <div
    class="
      w-full
      flex-col
      fixed
      top-0
      z-10
      flex
      lg:h-[110px] lg:flex-row
      justify-between
      bg-[#000000]
      items-center
      text-white
    "
  >
    <h1 class="my-4 lg:ml-20 lg:w-[190px]">
      <img
        class="inline-block w-[100px] h-[50px] lg:w-[190px]"
        src="../assets/img/Logo.png"
        alt=""
      />
    </h1>
    <div
      class="
        flex
        w-full
        border-t-[1px] border-b-[1px]
        lg:border-none
        justify-center
        items-center
        lg:h-full
      "
    >
      <div
        class="
          w-1/3
          md:w-3/5
          min-h-[50px]
          text-center
          border-r-[1px]
          lg:border-none lg:w-4/6 lg:h-full lg:text-xl
          flex
          items-center
          justify-center
          relative
        "
      >
        <div v-show="!lgScreen" class="flex justify-center items-center">
          <font-awesome-icon
            v-if="!showMenu"
            class="w-8 h-8"
            icon="fa-solid fa-bars"
            @click="showMenu = true"
          />
          <font-awesome-icon
            v-else
            class="w-8 h-8"
            icon="fa-solid fa-xmark"
            @click="showMenu = false"
          />
        </div>
        <div
          v-show="showMenu"
          class="
            font-normal
            absolute
            bg-[#000000]
            lg:static
            top-[100%]
            w-[250px]
            sm:w-full
            left-0
            menu-top
            flex flex-col
            justify-center
            items-center
            lg:flex-row lg:w-4/5 lg:h-full lg:text-xl
            xl:text-2xl
          "
        >
          <nuxt-link
            class="py-2 border-b-[1px] lg:border-none w-4/5"
            :to="{ name: `index___${$i18n.locale}` }"
            >{{ $t('homeLayout.home') }}</nuxt-link
          >
          <nuxt-link
            class="py-2 border-b-[1px] lg:border-none w-4/5"
            :to="{ name: `movies___${$i18n.locale}` }"
            >{{ $t('homeLayout.movies') }}</nuxt-link
          >
          <nuxt-link class="py-2 border-b-[1px] lg:border-none w-4/5" to="#">{{
            $t('homeLayout.showTime')
          }}</nuxt-link>
          <nuxt-link class="py-2 border-b-[1px] lg:border-none w-4/5" to="#">{{
            $t('homeLayout.bookTicket')
          }}</nuxt-link>
        </div>
      </div>
      <div
        class="
          w-1/3
          min-h-[50px]
          text-center
          flex
          justify-center
          items-center
          border-r-[1px]
          lg:border-none
          lg:w-auto
          lg:justify-start
          lg:bg-[#8cae55]
          lg:rounded-md
          lg:pl-3
        "
      >
        <font-awesome-icon icon="fa-solid fa-language" />
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          class="py-2 px-3 rounded-md font-bold"
          :to="switchLocalePath(locale.code)"
          >{{ locale.name }}</nuxt-link
        >
      </div>
      <div
        class="
          w-1/3
          min-h-[50px]
          text-center
          flex
          justify-center
          items-center
          relative
          lg:w-[30%]
        "
      >
        <font-awesome-icon
          v-show="!lgScreen && !user"
          class="w-5 h-5 px-4"
          icon="fa-solid fa-user"
          @click="showOptionUser = !showOptionUser"
        />
        <div v-show="showOptionUser">
          <div
            v-if="!user || !isLogin"
            class="
              flex
              sm:w-full
              font-normal
              flex-col
              py-3
              bg-gray-600
              justify-center
              items-center
              min-w-[250px]
              absolute
              top-[100%]
              right-0
              lg:static lg:bg-transparent lg:flex-row
            "
          >
            <nuxt-link
              :to="{ name: `auth-login___${$i18n.locale}` }"
              class="
                w-3/5
                lg:mx-2 lg:px-2
                bg-[#13C6B2]
                hover:bg-[#0f8779]
                text-white
                py-2
                rounded
                mb-3
                lg:mb-0 lg:w-auto
              "
              >{{ $t('homeLayout.login') }}</nuxt-link
            >
            <nuxt-link
              v-show="xlScreen"
              :to="{ name: `auth-register___${$i18n.locale}` }"
              class="
                w-3/5
                lg:mx-5 lg:px-4
                bg-[#13C6B2]
                hover:bg-[#0f8779]
                text-white
                py-2
                rounded
                lg:w-auto
              "
              >{{ $t('homeLayout.register') }}</nuxt-link
            >
          </div>
          <div
            v-else
            class="
              z-50
              flex
              justify-center
              items-center
              relative
              lg:mr-5
              xl:mr-16
              2xl:mr-20
            "
          >
            <div
              class="drop flex justify-center items-center cursor-pointer"
              @click="handlePopups()"
            >
              <img
                :src="user.avatar ? user.avatar : avatarNull"
                :alt="user.userName"
                class="w-10 h-10 inline-block rounded-full"
              />
              <p class="text-lg cursor-pointer hidden lg:block">
                {{ user.userName ? user.userName : user.email }}
              </p>
              <font-awesome-icon
                :class="{
                  active: showPopups.showProfile,
                  notActive: !showPopups.showProfile,
                }"
                class="w-7 h-7"
                icon="fa-solid fa-caret-right"
              />
            </div>
            <transition name="profile">
              <div
                v-show="showPopups.showProfile"
                class="
                  absolute
                  top-[100%]
                  z-50
                  bg-green-200
                  rounded-2xl
                  lg:right-0
                  right-
                  text-black
                  w-[200px]
                  xl:w-[250px]
                  lg:top-[187%]
                "
              >
                <div class="p-5 text-xl font-light flex flex-col">
                  <nuxt-link
                    :to="{ name: `user-profile___${$i18n.locale}` }"
                    class="drop-menu w-full bg-white"
                    >{{ $t('profile.profile') }}</nuxt-link
                  >
                  <nuxt-link
                    :to="{ name: `user-bill___${$i18n.locale}` }"
                    class="drop-menu w-full bg-white"
                    >{{ $t('profile.bills') }}</nuxt-link
                  >
                  <p class="drop-menu w-full bg-white">
                    {{ $t('homeLayout.movieWatch') }}
                  </p>
                  <p class="drop-menu w-full bg-white" @click="logout()">
                    {{ $t('profile.logout') }}
                  </p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      showOptionUser: false,
      lgScreen: false,
      xlScreen: false,
      showPopups: {
        showProfile: null,
        showOptions: null,
      },
      avatarNull:
        'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
    isLogin() {
      return this.$store.getters['auth/isLogged']
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  mounted() {
    if (window.innerWidth > 1024 && window.innerWidth < 1280) {
      this.showMenu = true
      this.lgScreen = true
      this.showOptionUser = true
    } else if (window.innerWidth > 1280) {
      this.showMenu = true
      this.lgScreen = true
      this.showOptionUser = true
      this.xlScreen = true
    } else {
      this.lgScreen = false
      this.xlScreen = true
      this.showOptionUser = true
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && window.innerWidth < 1280) {
        this.showMenu = true
        this.lgScreen = true
        this.showOptionUser = true
        this.xlScreen = false
      } else if (window.innerWidth > 1280) {
        this.xlScreen = true
        this.showMenu = true
        this.lgScreen = true
        this.showOptionUser = true
      } else {
        this.lgScreen = false
        this.xlScreen = true
        this.showMenu = false
        this.showOptionUser = true
      }
    })
  },
  methods: {
    handlePopups() {
      this.showPopups.showProfile = !this.showPopups.showProfile
      if (this.showPopups.showProfile || this.showPopups.showOptions)
        document.documentElement.style.overflow = 'hidden'
      else document.documentElement.style.overflow = 'auto'
    },
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.replace('/auth/login')
    },
  },
}
</script>

<style>
</style>