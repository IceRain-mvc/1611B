// pages/day06_02/day06_02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:[],
    limit:20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let content = [];
    wx.request({
      url: 'https://www.xiachufang.com/juno/weapp/v2/search/universal_search.json?q=土豆',
      data:{},
      success:(res)=>{
        this.setData({
          content: res.data.content.content
        })
      }
    })
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
    console.log("我是有底线的")
    //加载更多数据
    wx.request({
      url: 'https://www.xiachufang.com/juno/weapp/v2/search/universal_search.json?q=土豆',
      data: {
        limit: this.data.limit+5
      },
      success: (res) => {
        this.setData({
          content: res.data.content.content
        })
        this.setData({
          limit:this.data.limit+5
        })
      }
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("转发")
  }
})