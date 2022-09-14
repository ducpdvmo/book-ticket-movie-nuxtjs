<template>
  <button
    class="
      seat
      uppercase
      bg-[#3834347c]
      text-[#eae1e1]
      rounded-md
      w-8
      h-8
      sm:w-10
      sm:h-10
      text-center
      font-medium
      relative
    "
    :class="{ selected: isSelected }"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isSelected: false,
    }
  },
  created() {
    this.$nuxt.$on('reset:selectedSeat', this.handleEmitReset)
  },
  methods: {
    handleClick() {
      this.isSelected = !this.isSelected
      this.$emit('update:select')
    },
    handleEmitReset() {
      this.isSelected = false
    },
  },
}
</script>

<style scoped>
.selected {
  background: #85c325e6;
}
.reserved {
  background: #b01010e6;
  cursor: not-allowed;
}
</style>