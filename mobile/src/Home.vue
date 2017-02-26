<template>
<div class="home">
  <div class="homeCtn">
  <home-swiper></home-swiper>
  <home-nav></home-nav>
  <home-gap v-bind:style="gapStyle"></home-gap>
  <theme-rec></theme-rec>
  <home-gap v-bind:style="gapStyle"></home-gap>
  <pic-rec></pic-rec>
  <home-gap v-bind:style="gapStyle"></home-gap>
  <phx-rec></phx-rec>
  </div>
  <div style="position:fixed;z-index:10;" v-bind:style="menuStyle">
  <homeMenu></homeMenu>
  </div>
</div>
</template>

<script>
import homeSwiper from "./components/homeSwiper.vue"
import homeNav from "./components/homeNav.vue"
import homeGap from "./components/homeGap.vue"
import themeRec from "./components/themeRec/themeRec.vue"
import picRec from "./components/picRec/picRec.vue"
import phxRec from "./components/phxRec/phxRec.vue"

//test
import homeMenu from "./components/homeMenu/HomeMenu.vue"

export default {
  data: function(){
    var gapStyle = {
      backgroundColor: "#eceff1",
    };
    var menuStyle = {
      bottom: hotcss.px2rem(82) + "rem",
      right: hotcss.px2rem(230) + "rem",
    };
    return({
      isActive:true,
      gapStyle,
      menuStyle
    })
  },
  components: {
    'home-swiper': homeSwiper,
    'home-nav': homeNav,
    'home-gap': homeGap,
    'theme-rec': themeRec,
    picRec,
    phxRec,
    homeMenu,
  }
}
</script>

<style lang="scss">
@import "static/px2rem.scss";

.home{
  position:relative;
}
<style>
