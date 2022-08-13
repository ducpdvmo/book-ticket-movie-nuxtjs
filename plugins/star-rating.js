import Vue from 'vue'
import VueStarRating from 'vue-star-rating'
import { Tabs, Tab } from 'vue-tabs-component'
import vClickOutside from 'v-click-outside'

Vue.component('StarRating', VueStarRating)
Vue.component('Tabs', Tabs)
Vue.component('Tab', Tab)
Vue.use(vClickOutside)
