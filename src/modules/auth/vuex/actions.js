// src is a alias. see client/build/webpack.base.conf.js
import { userTokenStorageKey } from '$config'
import * as services from '$modules/auth/services'
import localforage from 'localforage'
import { isEmpty } from 'lodash'
import * as TYPES from './mutations-types'

export const attemptLogin = ({ dispatch }, payload) =>
  services
    .postLogin(payload)
    .then(data => {
      dispatch('setToken', data.access_token)

      return Promise.resolve()
    })
    .then(() => dispatch('loadUser'))

export const attemptRegister = ({ dispatch }, payload) =>
  services
    .postRegister(payload)
    .then(({ token }) => {
      dispatch('setToken', token)

      return Promise.resolve()
    })
    .then(() => dispatch('loadUser'))

export const logout = ({ dispatch }) => {
  return localforage
    .removeItem(userTokenStorageKey)
    .then(dispatch('setToken', null))
    .then(dispatch('setUser', {}))
}

export const setUser = ({ commit }, user) => {
  // Commit the mutations
  commit(TYPES.SET_USER, user)

  Promise.resolve(user) // keep promise chain
}

export const setToken = ({ commit }, payload) => {
  // prevent if payload is a object
  const token = isEmpty(payload) ? null : payload.token || payload

  // Commit the mutations
  commit(TYPES.SET_TOKEN, token)

  return Promise.resolve(token) // keep promise chain
}

export const checkUserToken = ({ dispatch, state }) => {
  // If the token exists then all validation has already been done
  if (!isEmpty(state.token)) {
    return Promise.resolve(state.token)
  }

  /**
   * Token does not exist yet
   * - Recover it from localstorage
   * - Recover also the user, validating the token also
   */
  return (
    localforage
      .getItem(userTokenStorageKey)
      .then(token => {
        if (isEmpty(token)) {
          // Token is not saved in localstorage
          return Promise.reject('NO_TOKEN') // Reject promise
        }
        // Put the token in the vuex store
        return dispatch('setToken', token) // keep promise chain
      })
      // With the token in hand, retrieves the user's data, validating the token
      .then(() => dispatch('loadUser'))
  )
}

/**
 * Retrieves updated user information
 * If something goes wrong, the user's token is probably invalid
 */
export const loadUser = ({ dispatch }) =>
  services
    .loadUserData()
    // store user's data
    .then(user => dispatch('setUser', user))
    .catch(logout)
