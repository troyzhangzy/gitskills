// components/playlist/playlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      playlist:{
        type:Object
      }
  },

  observers:{
    ['playlist.playCount'](val){
      console.log(val)
      console.log(this._tranNumber(val,2))
      this.setData({
        _count:this._tranNumber(val,2)
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    _count:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _tranNumber(num,point){
      let number=num.toString().split('.')[0]
      if(number.length<6){
        return number
      }else if (number.length>=6 && number.length<=8){
        let decimal=number.substring(number.length-4,number.length-4+point)
         return parseFloat(parseInt(num/10000)+'.'+decimal)+'万'
      }else if(number.length>8){
        let decimal=number.substring(number.length-8,number.length-8+point)
        return parseFloat(parseInt(num/100000000)+'.'+decimal)+'亿'
      }
    }
  }
})
