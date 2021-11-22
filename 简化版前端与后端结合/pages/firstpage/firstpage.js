// pages/firstpage/firstpage.js
Page({

  data: {
    list:'',
    lang:'',
    since:'',
    toastText:'',
    flag:'1'
  },

  houduan: function () {
    var that = this;
    that.setData({
      flag:null
    })
    wx.request({
    url: "https://trendings.herokuapp.com/repo?lang=java&since=weekly",
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
      list:res.data.items
    })
    }
    }
    })
  },
  onShareAppMessage: function () {

  },
  go2teach: function(){
    wx.navigateTo({
 
      url: '/pages/teachpage/teachpage',
 
      })
  },

  go2favor: function(){
    wx.navigateTo({
 
      url: '/pages/favorpage/favorpage',
 
      })
  },
  go2history: function(){
    wx.navigateTo({
 
      url: '/pages/historypage/historypage',
 
      })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'Smart GitHub',
    })
  },
  go2repo1: function(){
    wx.navigateTo({
 
      url: '/pages/i1/i1',
 
      })
  }

})