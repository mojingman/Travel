<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import {mapState} from 'vuex'
  import axios from 'axios'
    export default {
        name: "Home",
        components:{
          HomeIcons,
          HomeHeader:HomeHeader,
          HomeSwiper:HomeSwiper,
          HomeRecommend,
          HomeWeekend
        },
      computed:{
        ...mapState(['city'])
      },
      data(){
        return{
          lastCity:'',
          swiperList:[],
          iconList:[],
          recommendList:[],
          weekendList:[]

        }
      },
      methods:{
        getHomeInfo(){
          axios.get('/static/mock/index.json?city='+this.city)
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
          res=res.data
          const data=res.data
          if(res.ret && res.data){
            this.swiperList=data.swiperList
            this.iconList=data.iconList
            this.recommendList=data.recommendList
            this.weekendList=data.weekendList
          }
        },
      },
      mounted(){
        this.lastCity=this.city
        this.getHomeInfo();
      },
      activated(){
          if(this.lastCity!==this.city){
            this.lastCity=this.city
            this.getHomeInfo();
          }
      }

    }
</script>

<style>

</style>
