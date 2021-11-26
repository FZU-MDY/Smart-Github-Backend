// pages/mypage/mypage.js
var app = getApp()
Page({

  data:{
    result: '请求中。。。',
    userT: '',
    infoMess: '',
    list: '',
    word: '',
    list1:'',
    message:'',
    price:'',
    userN:'',
    imagine:'',
    gitname:'',
    contents:'https://github.com/settings/tokens/new?scopes=repo,gist,write:packages,read:packages,delete:packages,admin:org,admin:public_key,admin:repo_hook,admin:org_hook,notification,user,delete_repo,write:discussion,admin:enterprise,workflow,admin:gpg_key&description=Smart GitHub',
    token:'',
    flag:''
  },

  houduanButton1: function () {
    var that = this;
    if(that.data.token==''){}
    else{
    app.globalData.user=that.data.userT;
    wx.cloud.callFunction({
      name: "search1",   //云函数中文件夹的名称
      data: {
       userT:that.data.userT
      },
      success: function (res)  {
        var list=JSON.parse(res.result)
        
        console.log(list)
        that.setData({
            list:list.login,
            imagine:list.avatar_url,
            flag:'1'
        })
      }
    })
    wx.cloud.callFunction({
      name: "search3",   //云函数中文件夹的名称
      data: {
       userT:that.data.userT
      },
      success: function (res)  {
        var list=JSON.parse(res.result)
        
        console.log(list)
        that.setData({
          list1:list
        })
      }
    })
    }
    },
    usertoken:function(e){
      this.setData({
        userT:e.detail.value
      })
      app.globalData.name=this.data.userT;
    },  
    unlogin:function(){
      this.setData({
        flag:null
      })
    },  
    copyText: function (e) {
      console.log(e)
      wx.setClipboardData({
        data: e.currentTarget.dataset.text,
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制成功'
              })
            }
          })
        }
      })
    },
    token:function(e){
      this.setData({
        token:e.detail.value
      })
    },  
    loginBtnClick:function(){
      var that=this
      if(this.data.userT.length == 0 ){
        this.setData({
          infoMess:'温馨提示：token`不能为空！',
        })
      }else{
        this.setData({
          infoMess:'',
          userT:this.data.userT,
        })
      }
},

  onShareAppMessage: function () {

  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '我的',
    })
  },
  go2about: function(){
    wx.navigateTo({
 
      url: '/pages/about/about',
 
      })
  },

  go2repo1: function(e){
    var index=e.currentTarget.dataset.a;
     app.globalData.repo=index;
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
  favor:function(){
    wx.navigateTo({
      url: '/pages/favorpage/favorpage',
 
      })
  }

})