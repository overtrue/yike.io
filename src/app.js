import http from '$utils/http'
import { Message } from 'element-ui'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import './bootstrap'
import router from './router'
import store from './vuex'

Vue.config.productionTip = false

sync(store, router)

Vue.prototype.$message = Message
Vue.prototype.$http = http
Vue.prototype.$user = () => {
  return store.getters.currentUser
}

new Vue({
  el: '#app',
  store,
  router,
})
