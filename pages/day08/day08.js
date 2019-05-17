// pages/day08/day08.js
import wxRequest from '../../utils/wxRequest.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    public: [],
    major: [],
    flag: true,
    selectArr1: [],
    selectArr2: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let obj = {
      url: "http://www.edu-edu.com/exam-admin/real/public/subjects/json",
    }

    wxRequest(obj, function(res) {

      this.setData({
        public: res.subjectMap.public,
        major: res.subjectMap.major
      })
    }, this)
  },

  changeItem1(event) {
    let selectArr1 = []
    event.detail.value.forEach((item) => {
      selectArr1.push(this.data.public[parseInt(item)])
    })
    this.setData({
      selectArr1
    })


  },

  changeItem2(event) {
    let selectArr2 = []
    event.detail.value.forEach((item) => {
      selectArr2.push(this.data.major[parseInt(item)])
    })
    this.setData({
      selectArr2
    })


  },
  tabChange(event) {
    let {
      show
    } = event.target.dataset
    if (show === "1") {
      this.setData({
        flag: false
      })

    } else {
      this.setData({
        flag: true
      })

    }
  },
  save() {
    //保存 点击的数组
    let newArr = this.data.selectArr1.concat(this.data.selectArr2)
    //保存
    wx.setStorage({
      key: 'selectArr',
      data: newArr,
    })

    // wx.navigateTo({
    //   url: '',
    // })
    
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