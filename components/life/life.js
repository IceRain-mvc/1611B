// components/life/life.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  
  lifetimes:{
    created(){
      console.log("创建 created")
    },

    attached(){
      console.log("绑定 attached")
    },

    ready(){
      console.log("准备 ready")
    },
//------------------------------------
    moved(){
      console.log("移除 moved")
    },
    detached(){
      
      console.log("销毁 detached")
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
