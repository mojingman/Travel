<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>


      <div class="swiper-pagination"  slot="pagination"></div>


    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props:{
      list:Array
    },
    data(){
      return{
        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true
        },
        /*swiperList:[{
          id:'0001',
          imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/5eb82a8ca5b0cebb2c3ae1a53a4d8f81.jpg_750x200_645bfba1.jpg'
        },{
          id:'0002',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1609/4d/3dc09bcc290f0c02.jpg_750x200_09c97d67.jpg'
        }]*/
      }
    },
    computed:{
      showSwiper(){
        return this.list.length
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper>>> .swiper-pagination-bullet-active
    background #fdfffd !important
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    background #eee
  .swiper-img
    width 100%
    height 100%

</style>
