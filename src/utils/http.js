import axios from 'axios'
import NProgress from 'nprogress'
import { message } from 'antd';
import 'nprogress/nprogress.css'

// 状态码错误信息
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  501: 'token已失效！'
}


// 配置 headers 相关
axios.defaults.headers['Apollo-Token'] = localStorage.getItem('Token')
// 添加一个请求拦截器，用于设置请求过渡状态
axios.interceptors.request.use(
  (config) => {
    // 请求开始，蓝色过渡滚动条开始出现
    let token=localStorage.getItem('Token')
    if(window.location.pathname !== '/login'){
    if(token===null || token===undefined || token===""){
      window.location.reload()
    }else{
      NProgress.start()
    }
  }else{
    NProgress.start()
  }
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

    if(response.data.status === "200"){
      message.success(response.data.msg);
    }else if(response.data.status === "501"){
      message.error(response.data.msg);
      localStorage.removeItem('Token')
      window.location.reload()
    }else{
      message.error(response.data.msg);
    }

    return response
  },
  (error) => {
    let element = error.response.data.message
    for (const i in element) {
      if (element.hasOwnProperty.call(element, i)) {
        message.error(element[i]);
      }
    }
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
