// pages/time_fre_RF/time_fre_RF.js
var util = require('../../util/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  
  },
  formsubmit(e) {
    util.reqFunc("https://api.phmlearn.com/component/upload/ML/model/125/201 ",
      {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.input_fileName,
      }, 'result', function (res) {
        app.globalData.resultArray = [res.data.data.predict[0],
                                      res.data.data.predict[1]];
        console.log(app.globalData.resultArray);
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})