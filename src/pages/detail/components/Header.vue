<template>
    <div>
      <router-link
        tag="div"
        to="/" class="header-abs"
        v-show="showAbd"
      >
        <div class="iconfont header-abs-back" >&#xe624;</div>
      </router-link>

      <div
        class="header-fixed"
        v-show="!showAbd"
        :style="opacityStyle"
      >
        <router-link to="/">
          <span class="iconfont header-fixed-back">&#xe624;</span>
        </router-link>
        景点详情
      </div>
      <div class="content"></div>
    </div>
</template>

<script>
    export default {
        name: "DetailHeader",
      data(){
          return{
            showAbd:true,
            opacityStyle:{
              opacity:0
            }
          }
      },
      methods:{
        handleScroll(){
          const top=document.documentElement.scrollTop
          if(top>60 ){
            let opacity=top/140
            opacity=opacity>1?1:opacity

            this.opacityStyle={
              opacity:opacity
            }
            this.showAbd=false
          }else{
            this.showAbd=true
          }

        }
      },
      activated(){
       window.addEventListener('scroll',this.handleScroll)
      }
    }
</script>

<style lang="stylus"scoped>
  @import '~styles/varibles.styl'
  .content{
    height 50rem
  }
  .header-abs
      position: absolute
      left: .2rem
      top: .2rem
      width: .8rem
      height: .8rem
      line-height: .8rem
      border-radius: .4rem
      text-align: center
      background: rgba(0, 0, 0, .8)
  .header-abs-back{
    color #ffffff
    font-size .4rem
  }
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #ffffff
    background $bgColor
    font-size .32rem
  .header-fixed-back{
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem
    color #ffffff
  }
</style>
