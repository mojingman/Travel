<template>
  <div class="icons">
    <swiper  :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
    
</template>

<script>
    import index from "../../../router";

    export default {
        name: "HomeIcons",
      props:{
          list:Array
      },
      data(){
          return{
            swiperOption:{
              autoplay:false
            }
           /* iconList:[{
              id:'0001',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
              desc:'西湖'
            },{
              id:'0002',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
              desc:'千岛湖'
            },{
              id:'0003',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
              desc:'西溪湿地'
            },{
              id:'0004',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
              desc:'雷峰塔'
            },{
              id:'0005',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
              desc:'浪浪浪水公园'
            },{
              id:'0006',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
              desc:'杭州宋城'
            },{
              id:'0007',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
              desc:'杭州乐园'
            },{
              id:'0008',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
              desc:'漂流'
            },{
              id:'0009',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
              desc:'浙江大学'
            }]*/
          }
      },
      computed:{
          pages(){
            const pages=[]
            this.list.forEach((item,index) => {
              const  page=Math.floor(index/8)
              if(!pages[page]){
                pages[page]=[]
              }
              pages[page].push(item)
            })
            return pages
          }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "'~styles/varibles.styl"
  @import "'~styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position  absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
  .icon-img-content
    display block
    margin 0 auto
    height 100%
  .icon-desc
    position absolute
    left 0
    right 0
    bottom 0
    height .44rem
    line-height .44rem
    text-align center
    color $darkTextColor
    ellipsis()


</style>
