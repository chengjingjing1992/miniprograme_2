//Page Object
Page({
  /**
   * 页面的初始数据
   */
  data: {
    lunbolist:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //发送异步请求获取轮播数据并赋值初始化list
    var reqTask = wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      dataType: 'json',
      success: (result) => {
        
        var lunbolist=result.data.message;
        console.log(lunbolist);
        this.setData({
          lunbolist
        });
        
      }
    }); 
      
  }
});
  