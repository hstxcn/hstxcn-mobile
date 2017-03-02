<template lang="html">
  <div class="bonus">
    <myXHeader header="打赏我们" :showQa="showQa"></myXHeader>
    <div class="text">
      <p>1. 友拍认为，在这个人人都是摄影师的时代，每个人都是独一无二的美的存在，我们怀揣着将这些美和记忆记录下来的理想，打造了友拍平台。
</p>
      <p>2.	感谢我们设计师的通宵达旦，程序员的废寝忘食，也感谢自掏腰包购买服务器和云储存的所有成员。</p>
      <p>3. 如果平台为你带来了方便，同时你也认可我们的价值观，不妨扫码进行打赏，给我们前进下去的动力和支持。</p>
      <p>4. 打赏时请备注有效信息，我们将会在平台上公布打赏人员和金额，以示感激。</p>
    </div>
    <div class="qrcode"><img :src="qrcode" alt=""></div>
  </div>
</template>

<script>
import myXHeader from '../myXHeader.vue'
import qrcode from './logo.png'
export default {
  name: 'bonus',
  data () {
    return{
      showQa:false,
      qrcode,
    }

  },
  components: {
    myXHeader,
  }
}
</script>

<style lang="scss" scoped>
@import "static/px2rem.scss";
@import "../../common/scss/text.scss";

.text{
  padding-top: px2rem(42);
  margin-bottom: px2rem(100);
  p{
    margin: px2rem(60) px2rem(154) 0 px2rem(154);
  }
}
.qrcode{
  width: px2rem(470);
  margin: 0 auto;
  img{
    width: 100%;
  }
}
</style>
