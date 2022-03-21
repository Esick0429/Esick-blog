import axios from 'axios'
// import router from '@/route/index'
//请求拦截器

const service = axios.create({
  // baseURL: 'https://api.esick.xyz',
  timeout: 5000
})

service.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

//响应拦截器
service.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default service
