import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import { default as vuex } from './vuex'
import * as getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: vuex.modules,
  plugins: vuex.plugins,
  getters,
  strict: process.env.NODE_ENV !== 'production',
})
