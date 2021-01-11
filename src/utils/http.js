import axios from 'axios'
import NProgress from 'nprogress'
import { notification } from 'antd'

import 'nprogress/nprogress.css'

const env = process.env.REACT_APP_BUILD_ENV

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

// 配置 headers 相关
axios.defaults.headers['Apollo-Token'] = localStorage.getItem('Token')
axios.defaults.withCredentials = true
axios.defaults.timeout = 100000
axios.defaults.baseURL = "http://192.160.0.122:8081/api/auth";

export default function request(opt) {
  console.log("404")
  console.log(opt)
  // 调用 axios api，统一拦截
  return axios(opt)
    .then((response) => {
      // 打印业务错误提示
      if (response.data && response.data.errorCode !== 0) {
        // errorCode 401 跳转登录
        if (response.data.errorCode === 401) {
          window.location.href = '/error'
        }
      }

      return { ...response }
    })
    .catch((error) => {
      console.log(error)

      // 请求配置发生的错误
      if (!error.response) {
        return console.log('Error', error.message)
      }

      // 响应时状态码处理
      const status = error.response.status
      const errortext = codeMessage[status] || error.response.statusText
      if (env === 'testing') {
        if (status !== 401) {
          notification.error({
            message: `请求错误 ${status}`,
            description: errortext
          })
        } else {
          this.props.history.push({
            pathname: '/error'
          })
        }
      } else {
        // http status 401 跳转登录
        if (status === 401) {
          window.location.href = '/'
        }
      }
    })
}
