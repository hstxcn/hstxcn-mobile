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

@media only screen and (min-width: 768px) {
    #app{
      width: 768px;
      overflow: hidden;
    }
}
.weui_loading_toast{
  font-size:48px !important;
}
.weui_loading_toast .weui_toast_content{
  font-size:48px !important;
}
.weui-icon_toast.weui-loading {
  margin: 120px 0 0 !important;
  width: 152px !important;
  height: 152px !important;
  vertical-align: baseline;
  color:red;
}
.weui_loading_toast .weui_toast_content {
  margin-top: 0!important;
}
</style>
