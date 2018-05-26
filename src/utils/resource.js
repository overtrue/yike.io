import http from '@utils/http'

class Resource {
  constructor(uri) {
    this._uri = uri
  }

  get() {
    return http.get(this._uri)
  }

  post(data) {
    return http.post(this._uri, data)
  }

  patch(id, data) {
    return http.patch(this._uri + '/' + id, data)
  }

  put(id, data) {
    return http.put(this._uri + '/' + id, data)
  }

  delete(id) {
    return http.delete(this._uri + '/' + id)
  }
}

export default Resource
