var app = getApp()
Page({
 
  data: {
userT:'',
list:''
  },
  houduan: function () {
    var that = this;
    that.data.userT=app.globalData.user;
    wx.cloud.callFunction({
      name: "search6",   //云函数中文件夹的名称
      data: {
       userT:that.data.userT
      },
      success: function (res)  {
        var list=JSON.parse(res.result)
        
        console.log(list)
        that.setData({
          list:list
        })
      }
    })
  6
  },
  go2repo1:function(e){
    var index=e.currentTarget.dataset.a;
     app.globalData.repo=index;
     app.globalData.name=e.currentTarget.dataset.b;
     console.log(app.globalData.name);
     var that = this;
    wx.request({
     // https://api.github.com/repos/yinyuxuan2/-
      url: "https://api.github.com/repos/"+app.globalData.name+"/"+app.globalData.repo+"/contents",
      method: 'get',
      header: {
      'content-type': 'application/json' // 默认值
      },
      success: function (res) {
      console.log(res.data)//打印到控制台

       app.globalData.list=res.data; 
      }
      })
    wx.navigateTo({
      url: '/pages/repo1/repo1',
 
      })
      
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '收藏夹',
    })
  },
 
})