<template lang="html">
  <div class="app">
    <keep-alive>
     <router-view >
     </router-view>
    </keep-alive>
  </div>
</template>

<script>
import homeMenu from './components/homeMenu/HomeMenu.vue'

export default {
  name: "app",
  components:{
    homeMenu,
  }
}
</script>



<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
</style>
