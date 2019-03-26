import http from '$utils/http'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/message.css'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import './bootstrap'
import Root from './root'
import router from './router'
import store from './vuex'

Vue.config.productionTip = false

sync(store, router)

Vue.prototype.$message = Message
Vue.prototype.$http = http
Vue.prototype.$user = () => {
  return store.getters.currentUser
}

setTimeout(() => {
  new Vue({
    store,
    router,
    render: h => h(Root)
  }).$mount('#app')
}, 200)
