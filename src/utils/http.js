import axios from 'axios'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

// 状态码错误信息
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

// 添加一个请求拦截器，用于设置请求过渡状态
axios.interceptors.request.use(
  (config) => {
    // 请求开始，蓝色过渡滚动条开始出现
    NProgress.start()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加一个返回拦截器
axios.interceptors.response.use(
  (response) => {
    // 请求结束，蓝色过渡滚动条消失
    // 配置 headers 相关
axios.defaults.headers['Apollo-Token'] = localStorage.getItem('Token')
    NProgress.done()
    return response
  },
  (error) => {
    // 请求结束，蓝色过渡滚动条消失
    // 即使出现异常，也要调用关闭方法，否则一直处于加载状态很奇怪
    NProgress.done()
    return Promise.reject(error)
  }
)


axios.defaults.withCredentials = true
axios.defaults.timeout = 100000
axios.defaults.baseURL = "http://139.217.130.227:8081/api/auth";

export default axios
