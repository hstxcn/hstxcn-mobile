<template>
<div>
  <home-swiper></home-swiper>
  <home-nav></home-nav>
  <home-gap v-bind:style="gapStyle"></home-gap>
</div>
</template>

<script>
import homeSwiper from "./components/homeSwiper.vue"
import homeNav from "./components/homeNav.vue"
import homeGap from "./components/homeGap.vue"

export default {
  data: function(){
    var gapStyle = {
      backgroundColor: "#eceff1",
    }
    return({
      gapStyle
    })
  },
  components: {
    'home-swiper': homeSwiper,
    'home-nav': homeNav,
    'home-gap': homeGap,
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
