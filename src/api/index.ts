import request from '../util/request.js'
//获取所有文章列表
export function getArchiveList(data?:object) {
  return request({
    url: '/getArchiveList',
    method: 'get',
    data
  })
}
//获取文章信息
export function getArchiveData(data:{archiveId:string}) {
  return request({
    url: `/getArchiveData?archiveId=${data.archiveId}`,
    method: 'get',
    data
  })
}
//获取标签列表
export function getTagList(data?:any){
  return request({
    url: `/getTagList`,
    method: 'get',
    data
  })
}

//根据tagid获取文章列表
export function getTagArchiveList(data:{tagName:string}){
  return request({
    url: `/getTagArchiveList?tagName=${data.tagName}`,
    method: 'get',
    data
  })
}

//获取每日一句
export  function getEverydayQuotes(){
  return request({
    url:`/getEverydayQuotes`,
    method: 'get'
  })
}