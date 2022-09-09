<template>
  <div class="w-11/12 mx-auto">
    <div class="flex ml-10">
      <nuxt-link
        :to="{name: `admin-dashboard___${$i18n.locale}`}"
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
        ><font-awesome-icon class="w-6 h-6 mr-3" icon="fa-solid fa-house" />{{
          $t('dashboard.dashboard')
        }}</nuxt-link
      >
      <nuxt-link
        :to="{name: `admin-create-schedule___${$i18n.locale}`}"
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