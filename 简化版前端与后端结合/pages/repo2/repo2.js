// pages/repo2/repo2.js
var app=getApp();
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
      wx.cloud.callFunction({
        name: "search5",   //云函数中文件夹的名称
        data: {
          name:app.globalData.name+'/'+app.globalData.repo+'/contents/'+app.globalData.path,
        },
        success: function (res)  {
          var list=JSON.parse(res.result)
          
          console.log(list)
          app.globalData.list=list; 
        }
      })
       wx.navigateTo({
         url: '/pages/repo2/repo2',
    
         })}
    },
})