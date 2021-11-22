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
    wx.request({
    url: "https://api.github.com/users/"+that.data.userT,
    method: 'get',
    header: {
    'content-type': 'application/json' // 默认值
    },
    success: function (res) {
    console.log(res.data)//打印到控制台
    
   
    
    if (res.data.login == null) {
    var toastText = '无此用户';
    wx.showToast({
    title: toastText,
    icon: '',
    duration: 2000
    });
    } else {
    that.setData({
      list:res.data.login,
      imagine:res.data.avatar_url,
      flag:'1'
    })
    }
    }
    })

    wx.request({
      url: "https://api.github.com/users/"+that.data.userT+"/repos",
      method: 'get',
      header: {
      'content-type': 'application/json' // 默认值
      },
      success: function (res) {
      console.log(res.data)//打印到控制台

      if (res.data.length == null) {
      var toastText = '数据获取失败';
      wx.showToast({
      title: toastText,
      icon: '',
      duration: 2000
      });
      } else {
      that.setData({
       list1:res.data
      })
      }
      }
      })}
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
      
  }

})