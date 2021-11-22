// pages/index5/index5.js
var app = getApp()
Page({

 
  data: {
userT:'',
list:''
  },
  houduan: function () {
    var that = this;
    that.data.userT=app.globalData.user;
    wx.request({
    url: "https://api.github.com/users/"+that.data.userT+"/starred",
    method: 'get',
    header: {
    'content-type': 'application/json' // 默认值
    },
    success: function (res) {
    console.log(res.data)//打印到控制台
    
    if (res.data == null) {
    var toastText = '数据获取失败';
    wx.showToast({
    title: toastText,
    icon: '',
    duration: 2000
    });
    } else {
    that.setData({
      list:res.data
    })
    }
    }
    })
  }
})
