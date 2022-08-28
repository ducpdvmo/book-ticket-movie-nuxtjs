<template>
  <div class="min-h-screen flex flex-col relative">
    <header class="flex flex-col items-center">
      <div
        class="
          fixed
          top-0
          z-10
          w-full
          h-[110px]
          flex
          justify-between
          bg-[#1F2937]
          items-center
          text-white
        "
      >
        <h1 class="ml-20 w-[190px] h-[63px]">
          <img
            class="inline-block w-[190px] h-[63px]"
            src="../assets/img/Logo.png"
            alt=""
          />
        </h1>
        <div class="font-normal text-2xl menu-top">
          <nuxt-link class="mx-8" to="/">{{ $t('homeLayout.home') }}</nuxt-link>
          <nuxt-link class="mx-8" to="/movies">{{
            $t('homeLayout.movies')
          }}</nuxt-link>
          <nuxt-link class="mx-8" to="/showtime">{{
            $t('homeLayout.showTime')
          }}</nuxt-link>
          <nuxt-link class="mx-8" to="/buyticket">{{
            $t('homeLayout.bookTicket')
          }}</nuxt-link>
        </div>
        <div v-if="!user || !isLogin" class="mr-16 font-normal text-2xl">
          <nuxt-link
            to="/auth/login"
            class="
              mx-5
              px-4
              bg-[#13C6B2]
              hover:bg-[#0f8779]
              text-white
              py-2
              rounded
            "
            >{{ $t('homeLayout.login') }}</nuxt-link
          >
          <nuxt-link
            to="/auth/register"
            class="
              mx-5
              px-4
              bg-[#13C6B2]
              hover:bg-[#0f8779]
              text-white
              py-2
              rounded
            "
            >{{ $t('homeLayout.register') }}</nuxt-link
          >
        </div>
        <div v-else class="relative z-50">
          <div
            v-click-outside="closePopupProfile"
            class="drop flex justify-center items-center mr-20 cursor-pointer"
            @click="handlePopups()"
          >
            <img
              :src="user.avatar ? user.avatar : avatarNull"
              :alt="user.userName"
              class="w-10 h-10 inline-block rounded-full mr-3"
            />
            <p class="text-lg cursor-pointer">
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
                top-20
                z-50
                rounded-2xl
                right-20
                bg-white
                text-black
                w-[250px]
              "
            >
              <div class="p-5 text-xl font-light flex flex-col">
                <nuxt-link to="/user/profile" class="drop-menu w-full"
                  >Profile</nuxt-link
                >
                <nuxt-link to="/user/bills" class="drop-menu w-full"
                  >Vé Đã Mua</nuxt-link
                >
                <p class="drop-menu w-full">Phim đã xem</p>
                <p class="drop-menu w-full" @click="logout()">Logout</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="mt-[110px]">
        <div class="flex relative w-[1280px] px-[15px] my-8 h-16">
          <div class="w-1/5 mb-6 h-16">
            <div class="relative h-full">
              <select
                v-model="typeSearch"
                v-click-outside="closePopupOptions"
                class="
                  cursor-pointer
                  h-full
                  block
                  appearance-none
                  w-full
                  bg-gray-700
                  text-white text-xl
                  font-medium
                  py-3
                  px-8
                  border-gray-500 border-r-2
                  rounded-l-lg
                  leading-tight
                  focus:outline-none focus:bg-gray-500 focus:border-gray-500
                "
                @change="queryData"
                @click="handlePopupsOptions()"
              >
                <option value="movies">
                  {{ $t('homeLayout.moviesInTheater') }}
                </option>
                <option value="tvshow">
                  {{ $t('homeLayout.tvShow') }}
                </option>
              </select>
              <div
                :class="{
                  active: showPopups.showOptions,
                  notActive: !showPopups.showOptions,
                }"
                class="
                  pointer-events-none
                  text-3xl
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  px-2
                  text-white
                  -rotate-90
                "
              >
                <font-awesome-icon icon="fa-solid fa-caret-down" />
              </div>
            </div>
          </div>
          <div class="relative w-4/5 h-16">
            <input
              id="search"
              v-model="querySearch"
              v-click-outside="closedSearch"
              class="
                h-full
                block
                p-2.5
                w-full
                z-20
                px-6
                text-xl
                rounded-r-lg
                bg-gray-700
                placeholder-gray-400
                text-white
                outline-none
              "
              :placeholder="$t('homeLayout.searchPlaceholder')"
              @input="queryData"
            />
            <button
              type="submit"
              class="
                h-full
                w-[100px]
                absolute
                top-0
                right-0
                p-2.5
                text-2xl
                font-medium
                text-white
                rounded-r-lg
                focus:outline-none
                bg-blue-600
                hover:bg-blue-700
              "
            >
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
        <div
          v-if="queryResult.length > 0"
          class="absolute w-[1250px] ml-[15px] p-5 bg-[#080d13ed] z-50"
        >
          <div v-if="typeSearch == 'movies'" class="h-96 overflow-y-auto">
            <nuxt-link
              v-for="(result, index) in queryResult"
              :key="index"
              :to="{ name: 'movies-id___vi', params: { id: result.movie_id } }"
              class="
                text-white
                mb-5
                py-3
                px-8
                cursor-pointer
                flex
                items-center
                bg-gray-300
              "
            >
              <div
                class="
                  py-2
                  pl-4
                  mr-5
                  flex
                  items-center
                  cursor-pointer
                  w-full
                  hover:scale-105
                  hover:transition-all
                  hover:ease-in-out
                  hover:duration-200
                  hover:bg-[#c0b9b9]
                "
              >
                <img class="w-36 h-24" :src="result.photoUrl" alt="" />
                <span class="text-2xl font-bold ml-5">{{ result.name }}</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </header>
    <div
      :class="{
        cover: showPopups.showProfile || showPopups.showOptions,
        notCover: !showPopups.showProfile && !showPopups.showOptions,
      }"
      class="fixed top-0 left-0 z-0 w-screen bg-[#00000077]"
    ></div>
    <nuxt />
    <footer
      class="px-4 divide-y bg-gray-800 text-white absolute top-[100%] w-full"
    >
      <div
        class="
          container
          flex flex-col
          justify-between
          py-10
          mx-auto
          space-y-8
          lg:flex-row lg:space-y-0
        "
      >
        <div class="lg:w-1/3">
          <a href="#" class="flex justify-center space-x-3 lg:justify-start">
            <div
              class="flex items-center justify-center w-12 h-12 rounded-full"
            ></div>
            <span class="self-center text-2xl font-semibold"
              ><img src="../assets/img/Logo.png" alt=""
            /></span>
          </a>
        </div>
        <div
          class="
            grid grid-cols-2
            text-sm
            gap-x-3 gap-y-8
            lg:w-2/3
            sm:grid-cols-4
          "
        >
          <div class="space-y-3">
            <h3 class="tracking-wide uppercase">Product</h3>
            <ul class="space-y-1">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="tracking-wide uppercase">Company</h3>
            <ul class="space-y-1">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="uppercase">Developers</h3>
            <ul class="space-y-1">
              <li>
                <a href="#">Public API</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Guides</a>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <div class="uppercase">Social media</div>
            <div class="flex justify-start space-x-3">
              <a
                href="#"
                title="Facebook"
                class="flex items-center p-1 hover:text-[#00A9E8]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  class="w-5 h-5 fill-current"
                >
                  <path
                    d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                title="Twitter"
                class="flex items-center p-1 hover:text-[#00A9E8]"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 fill-current"
                >
                  <path
                    d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
                  ></path>
                </svg>
              </a>
              <a href="#" title="Instagram" class="flex items-center p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  class="w-5 h-5 fill-current"
                >
                  <path
                    d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="py-6 text-sm text-center">
        © 2000 VMO Company Co. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LayoutHome',
  transition: 'home',
  data() {
    return {
      showPopups: {
        showProfile: null,
        showOptions: null,
      },
      typeSearch: 'movies',
      querySearch: '',
      queryResult: [],
      unsubscribleListenSeachInput: null,
      avatarNull:
        'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
    }
  },
  computed: {
    movies() {
      return this.$store.getters['movies/movies']
    },
    user() {
      return this.$store.getters['user/getUser']
    },
    isLogin() {
      return this.$store.getters['auth/isLogged']
    },
  },
  mounted() {
    const searchInputEl = document.getElementById('search')
    this.unsubscribleListenSeachInput = searchInputEl.addEventListener(
      'focus',
      () => {
        const bodyEl = document.querySelector('body')
        bodyEl.style.height = '100vh'
        bodyEl.style.overflowY = 'hidden'
      }
    )
  },
  created() {},
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.replace('/auth/login')
    },
    queryData() {
      if (this.querySearch.toLowerCase() !== '') {
        if (this.typeSearch === 'movies') {
          this.queryResult = this.movies.filter((movie) => {
            return movie.name
              .toLowerCase()
              .includes(this.querySearch.toLowerCase())
          })
        }
      } else {
        this.queryResult = []
      }
    },
    closedSearch() {
      this.querySearch = ''
      this.queryResult = []
      const bodyEl = document.querySelector('body')
      bodyEl.style.height = 'auto'
      bodyEl.style.overflowY = 'auto'
    },
    handlePopups() {
      this.showPopups.showProfile = !this.showPopups.showProfile
      if (this.showPopups.showProfile || this.showPopups.showOptions)
        document.documentElement.style.overflow = 'hidden'
      else document.documentElement.style.overflow = 'auto'
    },
    handlePopupsOptions() {
      this.showPopups.showOptions = !this.showPopups.showOptions
      if (this.showPopups.showProfile || this.showPopups.showOptions)
        document.documentElement.style.overflow = 'hidden'
      else document.documentElement.style.overflow = 'auto'
    },
    closePopupProfile() {
      this.showPopups.showProfile
        ? (this.showPopups.showProfile = !this.showPopups.showProfile)
        : (this.showPopups.showProfile = false)
      if (!this.showPopups.showProfile) {
        document.documentElement.style.overflow = 'auto'
      }
    },
    closePopupOptions() {
      this.showPopups.showOptions
        ? (this.showPopups.showOptions = !this.showPopups.showOptions)
        : (this.showPopups.showOptions = false)
      if (
        !this.showPopups.showOptions &&
        this.showPopups.showProfile === null
      ) {
        document.documentElement.style.overflow = 'auto'
      }
    },
  },
}
</script>

<style scoped>
.menu-top .nuxt-link-exact-active {
  border-bottom: 4px solid red;
}
.profile-enter-active,
.profile-leave-active {
  transition: opacity 0.5s;
}
.profile-enter,
.profile-leave-active {
  opacity: 0;
}
.drop-menu {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 12px;
  padding: 8px 12px;
  margin: 8px auto;
  cursor: pointer;
}
.drop-menu:hover {
  background-color: #71363985;
}
.active {
  transition: all 0.1s linear;
  rotate: 90deg;
}
.notActive {
  transition: all 0.1s linear;
  rotate: 0deg;
}
.notCover {
  z-index: -3;
  opacity: 0;
}
.cover {
  z-index: 2;
  opacity: 0.85;
  overflow: hidden;
  min-height: 100vh;
  max-height: 100vh;
}
</style>
