var { articles } = require('../../../data/db.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    var articleId = options.articleId;
    this.data.articleId = articleId;
    // 设置文章详细内容
    var article = articles[articleId];
    // console.log(article)
    this.setData(article);
    /** 
     * 设置收藏状态
      {
        "0":false,
        "1":true
      }
    */
    var articlesCollection = wx.getStorageSync("articles_collection");
    var currentIsCollected = false;
    if (articlesCollection){
      currentIsCollected = articlesCollection[articleId];
    }else{
      var data = {};
      data[articleId] = false;
      wx.setStorageSync("articles_collection", data);
    }
    this.setData({
      currentIsCollected: currentIsCollected
    })
  },
  tapCollection: function () {
    /**
     *处理收藏
    wx.setStorageSync("articles_collection",{
      name:"aa"
    })
    wx.setStorageSync(key, data)
    */
    // console.log(wx.getStorageSync("articles_collection"));
    // wx.removeStorageSync("articles_collection")
    // wx.clearStorageSync();
    var articlesCollection = wx.getStorageSync("articles_collection");
    var currentIsCollected = articlesCollection[this.data.articleId];

    // 改变storage里面的值
    articlesCollection[this.data.articleId] = !currentIsCollected;
    wx.setStorageSync("articles_collection", articlesCollection);

    // 改变页面图片显示
    this.setData({
      currentIsCollected: !currentIsCollected
    })
  }
})