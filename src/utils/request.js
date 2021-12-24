import axios from 'axios';
import { Message, MessageBox, Loading } from 'element-ui';
import router from '../router';

// axios 增加防抖

// 正在进行中的请求列表
let globalReqList = [];

/**
 * 阻止重复请求
 * @param {array} reqList - 请求缓存列表
 * @param {string} url - 当前请求地址
 */
const stopRepeatRequest = (reqList, url) => {
  if (reqList.includes(url)) {
    return false;
  }
  return true;
};

// 请求成功删掉请求队列中的请求
const removeFinishedRequest = (reqList, url) => {
  reqList = reqList.filter(item => item !== url);
  return reqList;
};

// 生成用于对比的url  {url + method + data/params}
const getCheckRepeatRequestUrl = (url, method, data, params) => {
  data = typeof data === 'string' ? JSON.parse(data) : data;
  params = typeof params === 'string' ? JSON.parse(params) : params;
  return `${url}###${method}###${parseObj2UrlPrams(data)}###${parseObj2UrlPrams(params)}`;
};

// 将对象转换为 & 相连
const parseObj2UrlPrams = obj => {
  if (obj === undefined) {
    return 'undefined';
  }
  let str = '';
  for (let item in obj) {
    str += `(${item}=${obj[item]})`;
  }
  return str;
};

const tip = (msg,type) => {
  Message({
    type: type,
    message: msg,
    duration: 2000
  });
};

const box = msg => {
  MessageBox({
    title: '提示',
    message: msg,
    callback: action => {
      toLogin();
    }
  });
};

const toLogin = () => {
  router.replace({
    path: '/login'
  });
};

let service;

// api 请求路径
// let apiServerHost = 'http://api.行丰银拓.com';
let apiServerHost = 'http://api.hfyt365.com';
// let apiServerHost = 'http://192.168.1.31:8000'; // 亮
// let apiServerHost = 'http://192.168.1.42:8001'; // 宾

switch (location.href.split('#/')[0]) {
  case 'http://admin.xn--iiqy61chm1atuk.com/':
    apiServerHost = 'http://api.行丰银拓.com';
    service = axios.create({
      baseURL: 'http://api.行丰银拓.com',
      withCredentials: true,
      timeout: 300000
    });
    break;
  case 'http://admin.hfyt365.com/':
    apiServerHost = 'http://api.hfyt365.com';
    service = axios.create({
      baseURL: 'http://api.hfyt365.com',
      withCredentials: true,
      timeout: 300000
    });
    break;
  default:
    service = axios.create({
      // process.env.NODE_ENV === 'development' 来判断是否开发环境
      // easy-mock服务挂了，暂时不使用了
      baseURL: apiServerHost,
      withCredentials: true,
      timeout: 300000
    });
    break;
}
service.$host = apiServerHost;
// 设置post请求头
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 请求拦截器
service.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    Loading.service({text:'加载中',background:'rgba(0,0,0,.8)',spinner:'el-icon-loading'})
    if (localStorage.getItem('ms_userInfo')) {
      const token = JSON.parse(localStorage.getItem('ms_userInfo')).token;
      token && (config.headers.token = token);
    }
    if (router.history.current.fullPath === '/login') {
      globalReqList = [];
    }
    globalReqList.push(getCheckRepeatRequestUrl(service.$host + config.url, config.method, config.data, config.params));
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  //请求成功
  res => {
    Loading.service().close()
    globalReqList = removeFinishedRequest(
      globalReqList,
      getCheckRepeatRequestUrl(res.config.url, res.config.method, res.config.data, res.config.params)
    );
    console.log(res)
    tip(res.statusText,'success')
    return res;
  },
  //请求失败
  error => {
    if (error.response) {
      globalReqList = removeFinishedRequest(
        globalReqList,
        getCheckRepeatRequestUrl(
          error.response.config.url,
          error.response.config.method,
          error.response.config.data,
          error.response.config.params
        )
      );
    } else {
      return error;
    }
    /**
     * 请求失败后的错误统一处理
     * @param {Number} status 请求失败的状态码
     */
    const errorHandle = (status, data) => {
      switch (status) {
        case 507:
          tip('服务器内部错误','error');
          break;
        case 500:
          tip('服务器错误','error');
          break;
        case 401:
          localStorage.removeItem('ms_userInfo');
          box('登录过期，请重新登录');
          break;
        case 403:
          tip('您没有执行该操作的权限','error');
          break;
        case 400:
          tip(data.message,'error');
          break;
        case 412:
          tip(data,'error');
          break;
        /*default:
            tip('获取数据失败');
            break;*/
      }
    };
    if (error) {
      // 请求已发出，但是不在30分钟的范围
      errorHandle(error.response.status, error.response.data);
      return Promise.reject(error);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false);
    }
  }
);

export default service;
