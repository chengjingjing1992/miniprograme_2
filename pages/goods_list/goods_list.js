// pages/goods_list/goods_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pagenum:1,
    pagesize:10,
    total:undefined,
    cid:undefined,
    goodsList:[],
    tabss:[
      {
        id:0,
        name:"综合",
        isActive:true
      },
      {
        id:1,
        name:"销量",
        isActive:false
      },
      {
        id:2,
        name:"价格",
        isActive:false
      },
      {
        id:3,
        name:"其他",
        isActive:false 
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var param=options;
    var cid=param.cid;
    this.setData({
      cid
    });
    wx.showLoading({
      title: "加载中"
      
    });
    
    try {
      this.test1();
    } catch (error) {
       console.log(error)
    }finally{
      wx.hideLoading();
    }


  },
  test1(){
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search?cid='+this.data.cid+'&pagenum='+this.data.pagenum+'&pagesize='+this.data.pagesize,
      dataType: 'json',
      success: (result) => {
        var total=result.data.message.total;
        var pagenum=result.data.message.pagenum;
        this.setData({
          pagenum,total
        });
        this.setData({
          //对数组进行拼接
          goodsList:[...this.data.goodsList,...result.data.message.goods]
        });
        
        
      }
    });
      
  },
  handleClickone(e){
    
    var index=e.detail;
      var tabss=this.data.tabss;
      
      tabss.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      
      this.setData({
        tabss
      });

  },
  onReachBottom(e){
    var total=this.data.total;
    var pagenum=this.data.pagenum;

    if(Math.ceil(total/this.data.pagesize)>pagenum){
      this.data.pagenum++;
      // this.setData({
      //   pagenum:Number(pagenum)+1
      // });
      this.test1();
      
    }else{
      wx.showToast({
        title: '我是有底线的...'
      });
        
    }
  },
  onPullDownRefresh(e){
    //置空数组
    this.data.goodsList=[];
    this.data.pagenum=1;
    this.test1();
    //停止当前页面下拉刷新 效果
    wx.stopPullDownRefresh();
  }
})