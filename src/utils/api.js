import request from './request';
const formData = new FormData();

/*首页内容*/
export const getHomeBanner = (data) => {
  return request({
    url: '/content/index/floor/',
    data,
    method: 'POST'
  });
};
