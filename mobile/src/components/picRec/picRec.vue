<template lang="html">
<div>
  <themeTitle :my-title="picRecTitle" linkTo="recs"></themeTitle>
  <pic-slider></pic-slider>
  <pic-slider></pic-slider>
  <pic-slider></pic-slider>
</div>
</template>

<script>
import themeTitle from "../themeTitle.vue"
import picSlider from "./picSlider.vue"

export default {
  name: "picRec",
  data: function () {
    return {
      picRecTitle: "作品推荐",
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
