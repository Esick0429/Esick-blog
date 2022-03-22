import request from '../util/request.js'

export function getArchiveList(data?:any) {
  return request({
    url: 'http://127.0.0.1:4002/api/getArchiveList',
    method: 'get',
    data
  })
}

export function getArchiveData(data:any) {
  console.log(data);
  return request({
    url: `http://127.0.0.1:4002/api/getArchiveData?archiveId=${data.archiveId}`,
    method: 'get',
    data
  })
}