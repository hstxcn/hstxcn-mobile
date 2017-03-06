<template lang="html">
  <div class="aboutUs">
    <myXHeader header="关于我们" :showQa="showQa"></myXHeader>
    <div class="text">
      <div class="textImg">
      </div>
      <p class="title1">── 华科约拍平台</p>
      <p>当前版本1.1.1</p>
      <p class="title">产品来历:</p>
      <p>从军训服到学士帽</p>
      <p>青春四年黄金时代</p>
      <p>青年园里的玉兰花开</p>
      <p>东九路上的漂洋过海</p>
      <p>喻园大道的银杏树下</p>
      <p>数不尽的情侣在秀恩爱</p>
      <p>在这个人人都是摄影师的年代</p>
      <p>每个人都是最美的存在</p>
      <p>我们一直梦想着星辰大海</p>
      <p>我们更需要记录青春与爱</p>
      <p>要约拍，来友拍</p>
      <p>照片恒久远</p>
      <p>一张永流传</p>

      <p class="title">友拍能为你做什么:</p>
      <p class="nText">友拍筛选并集结了众多不同风格的优秀校园学生摄影师，满足个人、集体和航拍的众多需求，
      用最实惠的价格找到最适合你的摄影师，得到最让你满意的照片集，留下你最珍贵的回忆。</p>
      <p class="title">友拍制作团队:</p>
      <p class="nText mid">华中科技大学联创团队</p>
      <p class="nText mid">特别鸣谢：陈国晋，唐明华，徐吉昊，</p>
      <p class="nText mid">黄铭兴，申澳，聂路,汤跞煜，明煦智，</p>
      <p class="nText mid">马诗语。排名不分先后。</p>
      <p class="title">联系我们:</p>
      <p class="nText mid">邮件：youpaihust@163.com</p>
      <p class="nText mid">微信公众号：youpaihust</p>
      <p class="nText mid">电话：18986888887</p>
      <div class="qrcode"><img :src="qrcode" alt=""></div>
      <br/><br/><br/><br/><br/><br/>
    </div>
  </div>
</template>

<script>
import myXHeader from '../myXHeader.vue'
import qrcode from './qrcode.jpg'
export default {
  name: 'aboutUs',
  data () {
    return {
      showQa: false,
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
  .textImg{
    width: px2rem(480);
    height: px2rem(187);
    margin-top: px2rem(108);
    margin-left: px2rem(300);
    background-image: url('./youpai.png');
    background-size: 100%;
    margin-bottom: px2rem(92);
  }
  p{
    text-align: center;
  }
  p.title1{
    font-weight: bold;
    margin-bottom: px2rem(40);
  }
  p.title{
    font-weight: bold;
    margin-top: px2rem(40);
  }
  p.nText{
    margin: px2rem(20) px2rem(154) 0 px2rem(154);
    text-align: left;
  }
  p.mid{
    text-align: center;
  }
  .qrcode{
    width: px2rem(470);
    margin: 0 auto;
    img{
      width: 100%;
    }
  }
}
</style>
