<template>
  <div class="w-11/12 mx-auto">
    <div class="flex ml-10">
      <nuxt-link
        to="/admin/dashboard"
        class="
          bg-white
          h-[55px]
          flex
          items-center
          p-5
          rounded-full
          mb-3
          mr-5
          font-medium
        "
        ><font-awesome-icon
          class="w-6 h-6 mr-3"
          icon="fa-solid fa-house"
        />Dashboard</nuxt-link
      >
      <nuxt-link
        to="/admin/create-schedule"
        class="
          bg-white
          h-[55px]
          flex
          items-center
          p-5
          rounded-full
          mb-3
          mr-5
          font-medium
        "
        ><font-awesome-icon class="w-6 h-6 mr-3" icon="fa-solid fa-calendar" /> Create Schedule
        Movie</nuxt-link
      >
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: 'adminLayout',
  middleware: ['admin']
}
</script>

<style>
</style>