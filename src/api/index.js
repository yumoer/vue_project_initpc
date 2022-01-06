import axios from "../http/index"
//请求示例
//get
export const mokeGet = (data) => {
  return axios({
    url: "/xadmin/service/",
    method: "get",
    data,
  })
}
//post
export const mokePost = (data) => {
  return axios({
    url: "/announcement/list/1/",
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
