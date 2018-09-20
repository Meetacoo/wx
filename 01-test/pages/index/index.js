Page({
  tapMotto:function(){
    /*
    wx.navigateTo({
      url: '../article/article',
    })
    */
    wx.redirectTo({
      url: '../article/article',
    })
    console.log('tapMotto')
  },
  /*
  tapText:function(){
    console.log('tapText')
  }
  */
})