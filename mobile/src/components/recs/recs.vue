<template lang="html">
  <div class="recs">
    <myXHeader header="推荐" :showQa="showQa"></myXHeader>
    <recOrder></recOrder>
    <phxSlider v-for="srcArr in srcArrs" :srcArr="srcArr"></phxSlider>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" :loadingText="loadingText" @load="loadMore"/>
  </div>
</template>

<script>
import myXHeader from "../myXHeader.vue"
import recOrder from "./recOrder.vue"
import phxSlider from '../phxRec/phxSlider.vue'

export default {
  name: "recs",
  data () {
    let link = 'http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg';
    let srcArr = [link,link,link,link,link];
    let srcArrs = [srcArr,srcArr,srcArr,srcArr,srcArr];
    let loadingText = '正在加载';
    return {
      showQa : true,
      srcArr,
      srcArrs,
      loading: false,
      scroller: null,
      loadingText,
    }
  },
  mounted () {
    
  },
  components: {
    myXHeader,
    recOrder,
    phxSlider,
  },
  methods: {
    loadMore () {
      this.loading = true;
      console.log('log');
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.srcArrs.push(this.srcArr)
        }
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
@import "static/px2rem.scss";

.mu-infinite-scroll{
  height: px2rem(100);
  line-height: px2rem(100);
  width: 100%;
}
.mu-infinite-scroll-text{
  margin-left: px2rem(32);
  font-size: px2rem(48);
}
</style>
