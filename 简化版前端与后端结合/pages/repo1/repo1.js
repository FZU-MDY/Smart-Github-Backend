// pages/repo1/repo1.js
var app = getApp()
Page({

  data: {
reponame:'',
list:'',
flag:'1',
  },
click:function(){
  this.setData({
    list:app.globalData.list,
    flag:null
  })
  
},
dir:function(e){
  var index=e.currentTarget.dataset.a;
  app.globalData.path=index;
  var type=e.currentTarget.dataset.b;
  if(type!="dir"){
    app.globalData.isdir=null
    wx.navigateTo({
      url: '/pages/repo3/repo3',
 
      })
  }
  else{
    app.globalData.isdir=1
  
  var that = this;
  wx.request({
    // https://api.github.com/repos/yinyuxuan2/-/博饼
     url: "https://api.github.com/repos/"+app.globalData.name+"/"+app.globalData.repo+"/contents/"+ app.globalData.path,
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
     url: '/pages/repo2/repo2',

     })}
},
  onLoad:function(){
   
  }
  
 
})