import axios from "../http/index"
//请求示例
//get
export const mokeGet = (data) => {
  return axios({
    url: "/announcement/list/",
    method: "get",
    data,
    config: {
      headers: {
        'Request-Type': 'wechat'
      },
      timeout: 10000
    }
  })
}
//post
export const mokePost = (data) => {
  return axios({
    url: "/announcement/list/",
    method: "post",
    data,
    config: {
      headers: {
        'Request-Type': 'wechat'
      },
      timeout: 10000
    }
  })
}
