<template lang="html">
  <div>
  <themeTitle :my-title="phxRecTitle" linkTo="recs" :notPhx="notPhx"></themeTitle>
  <phx-slider :srcArr="srcArr"></phx-slider>
  <phx-slider :srcArr="srcArr"></phx-slider>
  <phx-slider :srcArr="srcArr"></phx-slider>
  </div>
</template>

<script>
import themeTitle from "../themeTitle.vue"
import phxSlider from "./phxSlider.vue"

export default {
  name: "phxRec",
  data: function (){
    let link = 'http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/three_sisters_wilderness_0.jpg';
    let srcArr = [link,link,link,link,link];
    return {
      srcArr,
      phxRecTitle: "摄影师推荐",
      notPhx: true,
    }
  },
  components: {
    themeTitle,
    phxSlider,
  }
}
</script>

<style lang="css">
</style>
