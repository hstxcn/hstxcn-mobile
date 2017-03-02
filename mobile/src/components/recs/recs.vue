<template lang="html">
  <div class="recs">
    <myXHeader header="推荐" :showQa="showQa"></myXHeader>
    <recOrder></recOrder>
    <phxSlider v-for="srcArr in srcArrs" :srcArr="srcArr"></phxSlider>
  </div>
</template>

<script>
import myXHeader from "../myXHeader.vue"
import recOrder from "./recOrder.vue"
import phxSlider from '../phxRec/phxSlider.vue'

export default {
  name: "recs",
  data () {
    let link = 'http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/three_sisters_wilderness_0.jpg';
    let srcArr = [link,link,link,link,link];
    let srcArrs = [srcArr,srcArr,srcArr,srcArr,srcArr];
    return {
      showQa : true,
      srcArrs,
    }
  },
  components: {
    myXHeader,
    recOrder,
    phxSlider,
  }
}
</script>

<style lang="css">
</style>
