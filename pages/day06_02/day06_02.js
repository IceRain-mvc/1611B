// pages/day06_02/day06_02.js
import wxRequest from '../../utils/wxRequest.js'
Page({
  /**
   * 页面的初始数据
   * offset:偏移量-->页数
   * 
   */
  data: {
    content: [],
    limit: 20,
    offset: 0,
    q: "泡面"
  },

  //传参 变:参数  不变:
  //q limit offset
  requestData(q, limit, offset) {
    // wx.request({
    //   url: 'https://www.xiachufang.com/juno/weapp/v2/search/universal_search.json?q=' + q,
    //   data: {
    //     limit: limit,
    //     offset: offset
    //   },
    //   success: (res) => {
    //     this.setData({
    //       content: res.data.content.content
    //     })
    //   }
    // })
    let obj = {
      url: "https://www.xiachufang.com/juno/weapp/v2/search/universal_search.json",
      data: {
        q: q,
        offset: offset,
        limit: limit
      },
      method: "GET",
      header: {},
    }
    wxRequest(obj, function(res) {
      this.setData({
        content: res.content.content
      })
    }, this)


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.requestData(this.data.q, this.data.limit, this.data.offset);
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
    this.setData({
      offset: this.data.offset + 1,
      limit: 20
    })
    this.requestData(this.data.q, this.data.limit, this.data.offset);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.setData({
      limit: this.data.limit + 5
    })
    this.requestData(this.data.q, this.data.limit, this.data.offset);

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log("转发")
  }
})