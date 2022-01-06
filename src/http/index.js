import axios from 'axios'
import {ElLoading, ElMessage} from 'element-plus'
//创建axios的一个实例
console.log(import.meta.env)
let baseUrl = ''
switch (import.meta.env.DEV === true && import.meta.env.MODE === 'development') {
  case true:
    baseUrl = 'http://api.行丰银拓.com'
    break
  case false:
    baseUrl = 'http://192.168.1.31:8001'
    break
}
// if(import.meta.env.DEV === true && import.meta.env.MODE === "development"){
//     baseUrl = 'http://192.168.1.42:8000'
// }else{
//     baseUrl = 'http://192.168.1.31:8000'
// }
let instance = axios.create({
  baseURL: baseUrl, //接口统一域名
  timeout: 30000, //设置超时
  headers: {
    'Content-Type': 'application/json;charset=UTF-8;',
  }
})
let loading
let message
//正在请求的数量
let requestCount = 0
//显示loading
const showLoading = () => {
  if (requestCount === 0 && !loading) {
    loading = ElLoading.service({
      text: '加载中...',
      background: 'rgba(0, 0, 0, 0.7)',
      spinner: 'el-icon-loading',
      lock:true,
      fullscreen: true,
      target:'.page'
    })
  }
  requestCount++
  console.log(requestCount)
}
//隐藏loading
const hideLoading = () => {
  requestCount--
  if (requestCount === 0) {
    loading.close()
  }
}

//请求拦截器
instance.interceptors.request.use((config) => {
  //响应成功
  showLoading()
  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
  const token = window.localStorage.getItem('token')
  token && (config.headers.Authorization = token)
  //若请求方式为post，则将data参数转为JSON字符串
  if (config.method === 'POST') {
    config.data = JSON.stringify(config.data)
  }
  console.log('拦截器通过', config)
  return config
}, (error) => {
  // 请求失败
  return Promise.reject(error)
})

//响应拦截器
instance.interceptors.response.use((response) => {
  hideLoading()
  //响应成功
  console.log('拦截器报错')
  return response
}, (error) => {
  //响应错误
  if (error.response && error.response.status) {
    const status = error.response.status
    switch (status) {
      case 400:
        message = '请求错误'
        break
      case 401:
        message = '请求错误'
        break
      case 404:
        message = '请求地址出错'
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器内部错误!'
        break
      case 501:
        message = '服务未实现!'
        break
      case 502:
        message = '网关错误!'
        break
      case 503:
        message = '服务不可用!'
        break
      case 504:
        message = '网关超时!'
        break
      case 505:
        message = 'HTTP版本不受支持'
        break
      default:
        message = '请求失败'
    }
    ElMessage({showClose: true,message: message,type: 'error'})
    hideLoading()
    return Promise.reject(error.response)
  }
  return Promise.reject(error)
})

export default instance
