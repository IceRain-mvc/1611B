export default function wxRequest(obj, cb, page) {
  //请求数据
  var callFn = function() {
    //网络请求
    wx.request({
      url: obj.url,
      method: obj.method || 'GET',
      header: obj.header || {},
      data: obj.data,
      success(res) {
        cb && cb.call(page,res.data)
      },
      fail(){
        //状态 
        console.error("请求失败")
      }
    })
  }
  return callFn()
}