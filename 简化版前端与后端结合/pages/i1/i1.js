Page({

data: {
list:'',
lang:'',
since:'',
toastText:''
},
houduan: function () {
  var that = this;
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
}
})
