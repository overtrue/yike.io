import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'
import vuex from './vuex'

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
