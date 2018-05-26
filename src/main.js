import Vue from 'vue'
import App from './App.vue'
import './assets/sass/app.scss'
import "vue-material-design-icons/styles.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
