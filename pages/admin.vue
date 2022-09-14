<template>
  <div class="lg:w-11/12 w-full mx-auto">
    <div class="flex justify-center sm:justify-start items-center sm:ml-10">
      <nuxt-link
        :to="{ name: `admin-dashboard___${$i18n.locale}` }"
        class="
          bg-white
          h-[55px]
          flex
          text-xs
          md:text-base
          items-center
          p-5
          rounded-full
          mb-3
          mr-5
          font-medium
        "
        ><font-awesome-icon
          class="md:w-6 md:h-6 w-4 h-4 mr-3"
          icon="fa-solid fa-house"
        />{{ $t('dashboard.dashboard') }}</nuxt-link
      >
      <nuxt-link
        :to="{ name: `admin-create-schedule___${$i18n.locale}` }"
        class="
          bg-white
          h-[55px]
          flex
          text-xs
          md:text-base
          items-center
          p-5
          rounded-full
          mb-3
          font-medium
        "
        ><font-awesome-icon
          class="md:w-6 md:h-6 w-4 h-4 mr-3"
          icon="fa-solid fa-calendar"
        />{{ $t('dashboard.createSchedule') }}</nuxt-link
      >
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: 'adminLayout',
  middleware: ['admin'],
}
</script>

<style>
</style>