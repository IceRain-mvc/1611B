// pages/day05/day05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    newObj:{}
  },

  jump(){
    wx.navigateTo({
      url: '/pages/day05_03/day05_03',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let newObj = JSON.parse(options.obj)
    this.setData({
      name:options.name,
      newObj: newObj
    })
    //请求数据
    //获取缓存
    //setData({})
    console.log("newPage------onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("newPage------onReady")
    //loading动画消失
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("newPage------onShow")
    //页面显示之前
    // 加载动画
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("newPage------onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("newPage------onUnload")
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