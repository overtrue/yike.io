import './bootstrap'

import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import { default as store } from './vuex'
import router from './router'
import Root from './root'
import Resource from '@utils/resource'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/message.css'
import 'element-ui/lib/theme-chalk/icon.css'

Vue.config.productionTip = false

sync(store, router)

Vue.prototype.$message = Message
Vue.prototype.api = (resource, id = null) => new Resource(resource, id)
Vue.prototype.$user = store.getters.currentUser
Vue.prototype.resource_url = (resource, id = null) => {
  return {name: `${resource}.show`, params: {id: id}}
}

setTimeout(() => {
  new Vue({
    store,
    router,
    render: h => h(Root)
  }).$mount('#app')
}, 200)
