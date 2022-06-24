import axios from 'axios'
// import router from '@/route/index'
//请求拦截器

const service:any = axios.create({
  baseURL: 'http://119.91.27.40:4002/api',
  timeout: 5000
})

service.interceptors.request.use(
  function (config:any) {
    return config
  },
  function (error:any) {
    return Promise.reject(error)
  }
)

//响应拦截器
service.interceptors.response.use(
  function (response:any) {
    return response
  },
  function (error:any) {
    return Promise.reject(error)
  }
)

export default service
