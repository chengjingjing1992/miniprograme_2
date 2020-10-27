// componets/Tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabss:{
      type:Array,
      value:[]
    },
    ttname:{
      type:String,
      value:''
    },
    persons:{
      type:Array,
      value:[]
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:"hello"

  },
  /**
   * 组件的方法列表
   */
  methods: {

    clickTab(e){

      //获取索引  
      const index=e.currentTarget.dataset.sss;
      // this.triggerEvent("主组件的自定义事件","需要传递的值");
      this.triggerEvent("handleone",index);
    //   //获取原数组
    //   var tabss=this.data.tabss;
      
    //   tabss.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      
    //   this.setData({
    //     tabss
    //   });
    //   // console.log(msg);
    
    }

  }
})
