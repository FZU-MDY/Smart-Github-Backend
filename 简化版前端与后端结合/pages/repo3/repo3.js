// pages/repo3/repo3.js

var app=getApp();
Page({
  data: {
    reponame:'',
    list:'',
    flag:'1',
    content:''
    
      },
    click:function(){
      var that = this;
      this.setData({
        list:app.globalData.list,
        flag:null
      })
      wx.cloud.callFunction({
        name: "search5",   //云函数中文件夹的名称
        data: {
          name:app.globalData.name+'/'+app.globalData.repo+'/contents/'+app.globalData.path,
        },
        success: function (res)  {
          var list=JSON.parse(res.result)
          
          console.log(list)
          that.setData({
            content: that.base64_decode(list.content)
         })
          app.globalData.list=list; 
        }
      })
       
      
    },
     base64_decode: function(input) { // 解码，配合decodeURIComponent使用
      var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (i < input.length) {
          enc1 = base64EncodeChars.indexOf(input.charAt(i++));
          enc2 = base64EncodeChars.indexOf(input.charAt(i++));
          enc3 = base64EncodeChars.indexOf(input.charAt(i++));
          enc4 = base64EncodeChars.indexOf(input.charAt(i++));
          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;
          output = output + String.fromCharCode(chr1);
          if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
          }
      }
      return this.utf8_decode(output);
  },
  
  
  utf8_decode:function  (utftext) { // utf-8解码
      var string = '';
      let i = 0;
      let c = 0;
      let c1 = 0;
      let c2 = 0;
      while (i < utftext.length) {
          c = utftext.charCodeAt(i);
          if (c < 128) {
              string += String.fromCharCode(c);
              i++;
          } else if ((c > 191) && (c < 224)) {
              c1 = utftext.charCodeAt(i + 1);
              string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
              i += 2;
          } else {
              c1 = utftext.charCodeAt(i + 1);
              c2 = utftext.charCodeAt(i + 2);
              string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
              i += 3;
          }
      }
      return string;
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'Code',
    })
  }
  
})