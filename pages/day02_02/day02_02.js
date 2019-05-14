// pages/day02_02/day02_02.js
Page({
  top: function() {
    console.log("顶部")
  },
  bottom: function() {
    console.log("底部")
  },
  onSScroll: function(event) {
    console.log(event.detail.scrollTop)
  },

  sub: function() {
    this.setData({
      num:this.data.num-10
    })
  },
  add: function() {
    this.setData({
      num: this.data.num + 10
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    num:20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})