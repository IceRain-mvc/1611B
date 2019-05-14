// components/child/Child.js
Component({
  /**
   * 组件的属性列表
   * vue : props
   */
  properties: {
    toChild:{
      type:"String",
      value:"无名氏"
    },
    toChild2:{
      type:"String",
      value:"啊啊啊"
    },
    toChild3:{
      type:"Object",
      value:{}
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
    paseValueToPrarent(){
      //this.$emit("自定义的事件名字",参数)
      let obj ={
        childValue:"子组件中的值"
      } 
      let obj2 = {
        child2:"啊啊啊啊啊"
      }

      this.triggerEvent("myChildEvent", obj, obj2)
    }
  }
})
