<template>
   <div class="container" @click="handleGallaryClick">
     <div class="wrapper">
       <swiper  :options="swiperOptions">
         <swiper-slide v-for="(item,index) of imgs" :key="index">
           <img class="gallary-img" :src="item"/>
         </swiper-slide>


         <div class="swiper-pagination"  slot="pagination"></div>
       </swiper>
     </div>
   </div>
</template>

<script>
    export default {
        name: "CommonGallary",
      props:{
          imgs:{
            type:Array,
            default(){
              return ['http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg',
              '//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg']
            }
          }
      },
      data(){
          return{
            swiperOptions:{
              pagination: '.swiper-pagination',
              paginationType:'fraction',
              observeParents:true,
              observer:true
            }
          }
      },
      methods:{
        handleGallaryClick(){
          this.$emit('close')
        }
      }
    }
</script>

<style lang="stylus" scoped>

  .container{
    direction flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    right 0
    top:0
    bottom 0
    background #000
    z-index 99

  }
  .wrapper{
    height: 0
    width: 100%
    padding-bottom: 100%
    margin-top 50%
  }
  .gallary-img{
    width 100%
  }
  .swiper-pagination{
    color #ffffff
  }
</style>
