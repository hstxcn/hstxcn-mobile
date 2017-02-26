<template lang="html">
  <div class="recs">
    <myXHeader header="推荐"></myXHeader>
    <recOrder></recOrder>
    <phxSlider></phxSlider>
    <phxSlider></phxSlider>
    <phxSlider></phxSlider>
  </div>
</template>

<script>
import myXHeader from "../myXHeader.vue"
import recOrder from "./recOrder.vue"
import phxSlider from '../phxRec/phxSlider.vue'

export default {
  name: "recs",
  data () {
    return {

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
