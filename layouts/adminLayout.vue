<template>
  <div class="bg-[#0077AD] min-h-screen pb-20">
    <header class="border-b mb-5">
      <div
        class="
          z-10
          w-full
          h-[110px]
          flex
          justify-between
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
        <div class="flex mr-10 items-center">
          <div class="mr-6">
            <div class="cursor-pointer">
              <font-awesome-icon icon="fa-solid fa-bell" />
            </div>
            <div v-show="false" class="pt-2">
              <p class="">Notifications</p>
            </div>
          </div>
          <div class="w-8 h-8 relative" @click="show = !show">
            <div
              class="
                w-8
                h-8
                rounded-full
                overflow-hidden
                shadow-lg
                image-fit
                zoom-in
                scale-110
              "
            >
              <img
                alt="Admin photo url"
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              />
            </div>
            <div
              v-show="show"
              class="w-56 bg-[#15329A] rounded-lg mt-2 absolute right-0 z-10"
            >
              <div class="text-white">
                <div class="p-4 border-b">
                  <div class="font-medium">Admin Account</div>
                </div>
                <ul>
                  <li class="p-2">
                    <nuxt-link
                      :to="{name: `admin-dashboard___${$i18n.locale}`}"
                      class="
                        flex
                        items-center
                        p-2
                        transition
                        duration-300
                        ease-in-out
                        rounded-md
                        hover:bg-green-700
                      "
                      ><font-awesome-icon
                        class="w-4 h-4 mr-2"
                        icon="fa-solid fa-house-user"
                      />
                      Dashboard</nuxt-link
                    >
                  </li>
                  <li class="p-2 border-t">
                    <nuxt-link
                      :to="{name: `admin-create-schedule___${$i18n.locale}`}"
                      class="
                        flex
                        items-center
                        p-2
                        rounded-md
                        hover:bg-green-700
                      "
                      ><font-awesome-icon
                        class="w-4 h-4 mr-2"
                        icon="fa-solid fa-calendar-check"
                      />Create Schedule Movie</nuxt-link
                    >
                  </li>
                </ul>
                <div class="p-2 border-t">
                  <button
                    class="
                      flex
                      items-center
                      p-2
                      transition
                      duration-300
                      ease-in-out
                      rounded-md
                      hover:bg-green-700
                      w-full
                    "
                    @click="logout()"
                  >
                    <font-awesome-icon
                      class="w-4 h-4 mr-2"
                      icon="fa-solid fa-right-from-bracket"
                    />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.replace('/auth/login')
    },
  },
}
</script>

<style>
</style>