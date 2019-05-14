// pages/day01/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:"范冰冰",
    list:[
      {
        name:"海贼王"
      },
      {
        name: "火影忍者"
      },
      {
        name: "海绵宝宝"
      },
      {
        name: "蜡笔小新"
      },
      {
        name: "天线宝宝"
      },
      {
        name: "柯南"
      },
      {
        name: "美少女战士"
      },
    ],
    text:""
  },

  click:function(ev){
    //vue: this.list = ""
    //react this.setState({})
    //小程序:
    console.log(this)
    this.setData({
      text:this.data.list[ev.target.dataset.child].name
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