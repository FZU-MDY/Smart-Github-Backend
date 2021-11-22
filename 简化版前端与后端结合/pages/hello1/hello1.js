// pages/hello/hello.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */data:{
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
token:''
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
        imagine:res.data.avatar_url
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

    onLoad: function () {
      console.log('onLoad')
      var that = this
      //调用应用实例的方法获取全局数据
     this.loginBtnClick();
    },
    gogithub2:function(){
      var that=this;
      wx.navigateTo({
        //url: '../search/search',
        url:'../search1/search1'
      })
    },
    gogithub1:function(){
      var that=this;
      wx.navigateTo({
        url: '../i1/i1',
      })
    },

 gogithub:function(){
   var that=this;
   app.globalData.user=that.data.userT;
   wx.navigateTo({
     url: '../index5/index5',
     
   })
 },
    usertoken:function(e){
      this.setData({
userT:e.detail.value
      })
    },
    getData(that){
      var that = this;
      wx.request({
        url: '',
        method: 'GET',
        header: {
          'content-type':'application/json'
        },
        success: function(res){
          console.log(res.data);
          console.log(that)
          that.setData({
            result:res.data
          })
          
        }
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
    

  })

 