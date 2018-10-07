import * as TYPES from './mutations-types'

export default {
  [TYPES.SET_TOKEN] (state, value) {
    state.token = value
  },
  [TYPES.SET_USER] (state, value) {
    state.user = value
  }
}
