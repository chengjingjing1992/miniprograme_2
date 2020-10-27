//Page Object
Page({
  /**
   * 页面的初始数据
   */
  data: {
    lunbolist:[],
    cateList:[],
    floorList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      this.initLunbo();
      this.initCateList();
      this.initFloorList();
      this.testCache();
  },
  initLunbo(){
    //发送异步请求获取轮播数据并赋值初始化list
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      dataType: 'json',
      success: (result) => {
        var lunbolist=result.data.message;
        this.setData({
          lunbolist
        });
        
      }
    }); 

  },
  initCateList(){
    //发送异步请求获取轮播数据并赋值初始化list
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
      dataType: 'json',
      success: (result) => {
        var cateList=result.data.message;
        this.setData({
          cateList
        });
        
      }
    }); 
  },
  initFloorList(){
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
      dataType: 'json',
      success: (result) => {
        var floorList=result.data.message;
        console.log(floorList);
        this.setData({
          floorList
        });
      }
    }); 
  },
  testCache(){

    //假装这个数据是从接口获取的  并且数据量很大
    var person={
      name:'张三',
      age:25
    };  
    //存储数据到缓存               
    wx.setStorageSync("per", {time:Date.now(),person});
    //从缓存获取数据
    const per=wx.getStorageSync('person11');
      
    if(!per){
      //缓存不存在直接调用接口
    }
    //获取缓存数据的时间戳
    var cachetime=per.time;
    

    //判断是否过期
    if((Date.now() - cachetime)<10000){
      console.log('没有过期');
      //使用缓存数据
    }else{
      console.log('已经过期');
      //重新调用接口
    }
    
      


  }
});
  