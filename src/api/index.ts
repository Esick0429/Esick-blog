import request from '../util/request.js'
//获取所有文章列表
export function getArchiveList(data?:any) {
  return request({
    url: '/api/getArchiveList',
    method: 'get',
    data
  })
}
//获取文章信息
export function getArchiveData(data:any) {
  return request({
    url: `/api/getArchiveData?archiveId=${data.archiveId}`,
    method: 'get',
    data
  })
}
//获取标签列表
export function getTagList(data?:any){
  return request({
    url: `/api/getTagList`,
    method: 'get',
    data
  })
}

//根据tagid获取文章列表
export function getTagArchiveList(data:{tagName:string}){
  return request({
    url: `/api/getTagArchiveList?tagName=${data.tagName}`,
    method: 'get',
    data
  })
}