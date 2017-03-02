<template lang="html">
  <div class="app">
    <loading v-model="isLoading"></loading>
    <keep-alive>
     <router-view >
     </router-view>
    </keep-alive>
  </div>
</template>

<script>
import homeMenu from './components/homeMenu/HomeMenu.vue'
import { Loading } from 'vux'
import { mapState } from 'vuex'

export default {
  name: "app",
  components:{
    homeMenu,
    Loading,
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
</script>



<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
</style>
