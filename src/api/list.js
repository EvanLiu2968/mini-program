/**
 * 接口列表
 */
const host = 'https://www.evanliu2968.com.cn';
//请求封装
function request(url, method, data, header = {}) {
  wx.showLoading({
    title: '加载中' //数据请求前loading
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, //仅为示例，并非真实的接口地址
      method: method,
      data: data,
      header: {
        'content-type': 'application/json', // 默认值
        'source-from': 'app' // 默认值
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res.data)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(false)
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  })
}
function get(url, data) {
  return request(url, 'GET', data)
}
function post(url, data) {
  return request(url, 'POST', data)
}
export const getPhotos = () => post('/api/photos')
export const getArticles = () => post('/api/articles')
export const getArticleDetail = (category, id) => {
  let file = `${category}/${id}`
  return post('/api/articles', {
    file: file
  })
}
