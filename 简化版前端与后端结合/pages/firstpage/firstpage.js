// pages/firstpage/firstpage.js
var app=getApp();
Page({

  data: {
    tisshow:true,
  tshow:false,//控制下拉列表的显示隐藏，false隐藏、true显示
  tselectData:['daily','weekly','monthly'],//下拉列表的数据
  tindex:0,//选择的下拉列表下标
  lisshow:true,
  lshow:false,//控制下拉列表的显示隐藏，false隐藏、true显示
  lselectData:['Java','JavaScript','HTML','CSS','Shell','Python','Kotlin','TypeScript','C'],//下拉列表的数据
  lindex:0,//选择的下拉列表下标
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
    wx.cloud.callFunction({
      name: "search2",   //云函数中文件夹的名称
      data: {
        language:that.data.lselectData[that.data.lindex]
      },
      success: function (res)  {
        var list=JSON.parse(res.result)
        
        console.log(list.items)
        that.setData({
          list:list.items
        })
       // console.log(this.data.list)
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
  go2search1: function(){
    wx.navigateTo({
 
      url: '/pages/search1/search1',
 
      })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'Smart GitHub',
    })
  },
  go2repo1: function(e){
    var index=e.currentTarget.dataset.a;
    app.globalData.repo=index;
    app.globalData.name=e.currentTarget.dataset.b;
    console.log(app.globalData.name);
    var that = this;
    wx.cloud.callFunction({
      name: "search4",   //云函数中文件夹的名称
      data: {
       name:app.globalData.name+'/',
       repo:app.globalData.repo
      },
      success: function (res)  {
        var list=JSON.parse(res.result)
        
        console.log(list)
        app.globalData.list=list
      }
    })
   wx.navigateTo({
     url: '/pages/repo1/repo1',

     })
  },
  tselectTap(){
    this.setData({
     tshow: !this.data.tshow
    });
    },
    // 点击下拉列表
    toptionTap(e){
    let Index=e.currentTarget.dataset.tindex;//获取点击的下拉列表的下标
    this.setData({
     tindex:Index,
     tshow:!this.data.tshow,
     tisshow:false
    });
    },

  lselectTap(){
  this.setData({
   lshow: !this.data.lshow
  });
  },
  // 点击下拉列表
  loptionTap(e){
  let Index=e.currentTarget.dataset.lindex;//获取点击的下拉列表的下标
  this.setData({
   lindex:Index,
   lshow:!this.data.lshow,
   lisshow:false
  });
  },


})