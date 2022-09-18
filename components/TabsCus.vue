<template>
  <div class="min-h-[600px] w-full rounded-[25px] shadow-2xl">
    <div
      :class="`${myStyle.containTitle} relative w-full h-[68px] rounded-[25px]`"
    >
      <div
        v-for="(tabItem, index) in tabItems"
        :key="tabItem.name"
        :class="`${myStyle.title} flex items-center justify-center text-white text-[1.2rem] 
                   font-semibold cursor-pointer select-none`"
        @click="setCurrentTab(index)"
      >
        {{ $t(`tabs.${tabItem.title}`) }}
      </div>
    </div>
    <div class="flex justify-center w-full">
      <keep-alive>
        <slot><component :is="currentComponent"></component></slot>
      </keep-alive>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    myStyle: {
      type: Object,
      default: () => {},
    },
    tabItems: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      currentTab: 0,
      currentComponent: this.tabItems && this.tabItems[0].component,
    }
  },

  computed: {
    getClassColsTabItem() {
      return `grid-cols-${this.tabItems.length}`
    },
  },

  methods: {
    setCurrentTab(index) {
      this.currentTab = index
      this.currentComponent = this.tabItems[this.currentTab].component
    },
  },
}
</script>
  
  <style></style>
  