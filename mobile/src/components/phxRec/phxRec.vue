<template lang="html">
  <div>
  <themeTitle :my-title="phxRecTitle" linkTo="recs"></themeTitle>
  <phx-slider></phx-slider>
  <phx-slider></phx-slider>
  <phx-slider></phx-slider>
  </div>
</template>

<script>
import themeTitle from "../themeTitle.vue"
import phxSlider from "./phxSlider.vue"

export default {
  name: "phxRec",
  data: function (){
    return {
      phxRecTitle: "摄影师推荐",
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
