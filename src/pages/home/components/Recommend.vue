<template>
  <div >
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">

        <img class="item-img" :src="item.imgUrl"/>

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "HomeRecommend",
      props:{
          list:Array
      },
        data(){
          return{
            /*recommendList:[{
              id:'0001',
              imgUrl:'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_200x200_38cef490.jpg',
              title:'西溪国家湿地洪园',
              desc:'春天的记忆是从花开始，梅花、桃花绽放，柳树抽芽，绿水泱泱，自此进入风和日丽的明媚时节。'
            },{
              id:'0002',
              imgUrl:'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_200x200_38cef490.jpg',
              title:'西溪国家湿地洪园',
              desc:'春天的记忆是从花开始，梅花、桃花绽放，柳树抽芽，绿水泱泱，自此进入风和日丽的明媚时节。'
            },{
              id:'0003',
              imgUrl:'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_200x200_38cef490.jpg',
              title:'西溪国家湿地洪园',
              desc:'春天的记忆是从花开始，梅花、桃花绽放，柳树抽芽，绿水泱泱，自此进入风和日丽的明媚时节。'
            }]*/
          }

        }
    }
</script>

<style lang="stylus" scoped>
  @import "'~styles/mixins.styl"
  .title
    margin-top .2em
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem

  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem

  .item-info
    flex 1
    padding .1rem
    min-width 0

  .item-title
    line-height .54rem
    font-size .32rem
  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()
  .item-button
    line-height .44rem
    margin-top: .16rem
    background #ff9300
    padding 0 .2rem
    border-radius .06rem
    color #fff









</style>
