import axios from 'axios'
import NProgress from 'nprogress'
import store from '../store';
import {
  message
} from 'antd';
import 'nprogress/nprogress.css'

// 状态码错误信息
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  501: 'token已失效！'
}

let token = store.getState().token
function change(){
  token = store.getState().token
  // 配置 headers 相关
  axios.defaults.headers['Apollo-Token'] = token
}
//监听token变化
store.subscribe(change);
// 添加一个请求拦截器，用于设置请求过渡状态
axios.interceptors.request.use(
  (config) => {
    // 请求开始，蓝色过渡滚动条开始出现
    if (window.location.pathname !== '/login') {
        NProgress.start()
    } else {
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
    if (response.data.status === "200" && response.data.msg) {
      message.success(response.data.msg);
    } else if (response.data.status === "501" && response.data.msg) {
      message.error(response.data.msg);
      store.dispatch({
        type: 'token',
        value: null
      });
    } else if(response.data.msg) {
      message.error(response.data.msg);
    }

    return response
  },
  (error) => {
    //有错误状态值时
    if(error.response){
    let element = error.response.data.message
    if(error.response.status === 429){
      message.error(element);
    }else{
    for (const i in element) {
      if (element.hasOwnProperty.call(element, i)) {
        message.error(element[i]);
      }
    }
  }
}else{
  message.error("服务器错误，请稍后重试");
}
    // 请求结束，蓝色过渡滚动条消失
    // 即使出现异常，也要调用关闭方法，否则一直处于加载状态很奇怪
    NProgress.done()
    return Promise.reject(error)
  }
)


axios.defaults.withCredentials = true
axios.defaults.timeout = 100000
axios.defaults.baseURL = "http://139.217.130.227/api/auth";

export default axios