<template>
  <div >
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <!--<button class="item-button">查看详情</button>-->
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "HomeWeekend",
    props:{
      list:Array
    },
    data(){
      return{
        /*recommendList:[{
          id:'0001',
          imgUrl:'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
          title:'美丽普陀山',
          desc:'人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
        },{
          id:'0002',
          imgUrl:'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
          title:'美丽普陀山',
          desc:'人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
        },{
          id:'0003',
          imgUrl:'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
          title:'美丽普陀山',
          desc:'人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
        }]*/
      }

    }
  }
</script>

<style lang="stylus" scoped>
  @import "'~styles/mixins.styl"
  .title
    line-height .8rem
    background #eee
    text-indent .2rem
 .item-img-wrapper
   overflow hidden
   height 0
   padding-bottom 37.09%

  .item-img
    width 100%
  .item-info
    padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()

</style>
