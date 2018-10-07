import axios from 'axios'
import interceptors from './interceptors'

// allow use http client without Vue instance
const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000
})

interceptors(http)

/**
 * Helper method to set the header with the token
 */
export function setToken (token) {
  http.defaults.headers.common.Authorization = `Bearer ${token}`
}

export default http
