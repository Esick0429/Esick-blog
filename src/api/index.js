import request from '../util/request.js'

export function getArchiveData(data) {
  return request({
    url: 'http://127.0.0.1:4002/api/getArchiveData',
    method: 'get',
    data
  })
}