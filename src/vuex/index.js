import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import vuex from './vuex'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: vuex.modules,
  plugins: vuex.plugins,
  getters,
  strict: process.env.NODE_ENV !== 'production'
})
