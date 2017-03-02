<template lang="html">
<div>
  <themeTitle :my-title="picRecTitle" linkTo="recs" :notPhx="notPhx"></themeTitle>
  <pic-slider :srcArr="srcArr"></pic-slider>
  <pic-slider :srcArr="srcArr"></pic-slider>
  <pic-slider :srcArr="srcArr"></pic-slider>
</div>
</template>

<script>
import themeTitle from "../themeTitle.vue"
import picSlider from "./picSlider.vue"

export default {
  name: "picRec",
  data: function () {
    let link = 'http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/three_sisters_wilderness_0.jpg';
    let srcArr = [link,link,link,link,link]
    return {
      srcArr,
      picRecTitle: "作品推荐",
      notPhx: true,
    }
  },
  components: {
    themeTitle,
    picSlider,
  }
}
</script>

<style lang="css">
</style>
