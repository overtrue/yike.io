// plugins is a alias. see client/build/webpack.base.conf.js
// import http client
import http from '$utils/http'

// send login data and retrive a new token
export const postLogin = ({ username, password }) => {
  return http.post('/auth/login', {
    username: username,
    password: password,
  })
}

export const postRegister = payload => {
  return http.post('/auth/register', payload)
}

// get current user's data
export const loadUserData = () => http.get('/me').catch(() => {})

// revoke current token
export const revokeToken = token => http.post('/oauth/tokens/' + token)
