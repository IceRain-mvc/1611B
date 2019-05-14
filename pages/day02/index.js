// pages/day02/index.js
let appInstance = getApp();
// console.log(appInstance.globalData.food);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[
      "http://n.sinaimg.cn/sports/2_img/sipaphoto/49d350e9/w752h1024/20180129/k1hF-fyqzcxh7811199.jpg",
      "http://www.sinaimg.cn/dy/slidenews/2_img/2016_42/792_1964306_936297.jpg",
      "http://staticlive.qietv.douyucdn.cn/upload/cms/gong/201609021748271098.jpg"

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(appInstance.globalData.food);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})