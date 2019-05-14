// pages/day05_03/day05_03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList:[
      "北京","东京","巴黎","巴厘岛","凤凰古镇"
    ]
  },

  selectCity(event){
    let {item} = event.target.dataset;
    console.log(item)

    //1:值 获取 到  放到上一个页面 city
    //本地存储
    let current =getCurrentPages();
    //current : 数组
    let page2This = current[current.length-2]

    page2This.setData({
      city:item
    })

    console.log(current)
    

    //2:页面销毁 跳过去
    wx.navigateBack({
      
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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