import './bootstrap'

import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import { default as store } from './vuex'
import router from './router'
import Root from './root'

Vue.config.productionTip = false

sync(store, router)

setTimeout(() => {
  new Vue({
    store,
    router,
    render: h => h(Root)
  }).$mount('#app')
}, 200)
