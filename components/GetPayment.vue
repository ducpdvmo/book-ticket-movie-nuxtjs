<template>
  <div
    class="
      min-w-screen
      h-screen
      animated
      fadeIn
      faster
      fixed
      left-0
      top-0
      flex
      justify-center
      items-center
      inset-0
      z-50
      outline-none
      focus:outline-none
      bg-no-repeat bg-center bg-cover
    "
    style="
      background-image: url(https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1582&q=80);
    "
  >
    <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div
      v-if="show"
      class="
        w-full
        max-w-lg
        p-5
        relative
        mx-auto
        my-auto
        rounded-xl
        shadow-lg
        bg-white
      "
    >
      <div class="">
        <div class="text-center p-5 flex-auto justify-center">
          <font-awesome-icon
            class="w-4 h-4 flex items-center text-red-500 mx-auto mb-1"
            icon="fa-solid fa-circle-info"
          />
          <slot name="icon_noti"></slot>
          <h2 class="text-xl font-bold py-4">{{$t('bookTicket.titlePayment')}}?</h2>
          <slot class="text-sm text-gray-500 px-8" name="title_noti"></slot>
        </div>
        <div class="p-3 mt-2 text-center space-x-4 md:block">
          <button
            class="
              mb-2
              md:mb-0
              bg-white
              px-5
              py-2
              text-sm
              shadow-sm
              font-medium
              tracking-wider
              border
              text-gray-600
              rounded-full
              hover:shadow-lg hover:bg-gray-100
            "
            @click="close"
          >
            {{$t('bookTicket.cancel')}}
          </button>
          <button
            class="
              mb-2
              md:mb-0
              bg-red-500
              border border-red-500
              px-5
              py-2
              text-sm
              shadow-sm
              font-medium
              tracking-wider
              text-white
              rounded-full
              hover:shadow-lg hover:bg-red-600
            "
            @click="submit"
          >
            <slot name="handle_name"></slot>
          </button>
        </div>
      </div>
    </div>
    <div
      v-else
      class="
        w-full
        max-w-lg
        p-5
        relative
        mx-auto
        my-auto
        rounded-xl
        shadow-lg
        bg-white
      "
    >
      <div class="">
        <div class="text-center p-5 flex-auto justify-center">
          <font-awesome-icon
            class="
              w-16
              h-16
              flex
              items-center
              rounded-full
              bg-[#16A34A]
              text-[#DCFCE7]
              mx-auto
            "
            icon="fa-solid fa-circle-check"
          />
          <slot name="title_success"></slot>
        </div>
        <div class="p-3 mt-2 text-center space-x-4 md:block">
          <button
            class="
              mb-2
              md:mb-0
              bg-[#4F46E5]
              px-5
              py-2
              text-sm
              shadow-sm
              font-medium
              tracking-wider
              border
              text-white
              rounded-full
              hover:text-black hover:shadow-lg hover:bg-gray-100
            "
            @click="redirect"
          >
            {{$t('bookTicket.done')}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },
  methods: {
    close() {
      this.$emit('close:popup', false)
    },
    submit() {
      this.show = false
      this.$emit('handle:payment')
    },
    redirect() {
      window.location.reload(true)
    },
  },
}
</script>