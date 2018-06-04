import http from '@utils/http'

class Resource {
  constructor(uri, id = null) {
    this._uri = uri
    this._id = id
  }

  find(id) {
    return this.get('/'+id)
  }

  update(id, data) {
    return this.patch(id, data)
  }

  destroy(id) {
    return this.delete(id)
  }

  get(query = '') {
    return http.get(this._uri + query)
  }

  post(data) {
    return http.post(this._uri, data)
  }

  patch(id, data) {
    if (typeof id == 'object') {
      data = id
      id = this._id
    }

    return http.patch(this._uri + '/' + id, data)
  }

  put(id, data) {
    if (typeof id == 'object') {
      data = id
      id = this._id
    }

    return http.put(this._uri + '/' + id, data)
  }

  delete(id) {
    if (typeof id == 'object') {
      data = id
      id = this._id
    }
    return http.delete(this._uri + '/' + id)
  }
}

export default Resource
