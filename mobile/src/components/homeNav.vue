<template lang="html">
  <div>
      <flexbox :gutter="0">
          <flexbox-item><div class="homenav-flex">0</div></flexbox-item>
          <flexbox-item><div class="homenav-flex">2</div></flexbox-item>
          <flexbox-item><div class="homenav-flex">3</div></flexbox-item>
          <flexbox-item><div class="homenav-flex">4</div></flexbox-item>
      </flexbox>
      <flexbox :gutter="0">
          <flexbox-item><div class="homenav-flex">0</div></flexbox-item>
          <flexbox-item><div class="homenav-flex">2</div></flexbox-item>
          <flexbox-item><div class="homenav-flex">3</div></flexbox-item>
          <flexbox-item><div class="homenav-flex">4</div></flexbox-item>
      </flexbox>
  </div>
</template>

<script>
import {
  Flexbox,
  FlexboxItem
} from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem
  }
}
</script>

<style lang="scss">
@import "static/px2rem.scss";

.homenav-flex {
  height: px2rem(180);
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>
