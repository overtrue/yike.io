// plugins is a alias. see client/build/webpack.base.conf.js
// import http client
import { default as http } from '@utils/http'

// send login data and retrive a new token
export const postLogin = ({ username, password }) => {
  return http.post('/oauth/token', {
    grant_type: 'password',
    client_id: process.env.VUE_APP_AUTH_CLIENT_ID,
    client_secret: process.env.VUE_APP_AUTH_CLIENT_SECRET,
    username: username,
    password: password,
    scope: ''
  })
}

export const postRegister = (payload) => {
  return http.post('/auth/register', payload)
}

// get current user's data
export const loadUserData = () => http.get('/me')

// revoke current token
export const revokeToken = (token) => http.post('/oauth/tokens/' + token)
