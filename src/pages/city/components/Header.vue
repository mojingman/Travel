<template>
    <div class="header">
      城市选择
      <router-link to="/">
        <span class="iconfont header-back">&#xe624;</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="stylus"  scoped>
  @import '~styles/varibles.styl'
  .header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #ffffff
    background $bgColor
    font-size .32rem
  .header-back{
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem
    color #ffffff
  }


</style>
