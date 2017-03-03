<template lang="html">
  <div class="aboutUs">
    <myXHeader header="摄影师入驻" :showQa="showQa"></myXHeader>
    <div class="text">
      <div class="textImg">
      </div>
      <p class="title1">── 华科约拍平台</p>
      <p>当前版本1.1.1</p>
      <p class="title">摄影师入驻可以得到什么 :</p>
      <p class="nText">1. 丰厚的约拍收 ，尤其在毕业季这种拍照需求极其旺盛的时候。</p>
      <p class="nText">2. 可以享受平台带来的巨大流量，成立后会在全华科推广，目前已经得到大创，以及启明学院
  的支持，社联及校会正在洽谈中，平台有专门的运营组，可以为平台流量得到足够的保障。</p>
      <p class="nText">3. 第一批入驻的摄影师可以得到免费的入驻席位，可以得到首页的推荐资格，可以在摄影师推荐页面得到靠前的排位</p>
      <p class="nText">4. 平台会入驻优秀模特，第一时间享受平台内入驻模特的约拍邀请。</p>
      <p class="nText">5. 优秀摄影师的交流，平台目前已经邀请到华科顶级人像摄影师若干，某石姓大佬，某人赢摄影师八道，某巨神项师傅等等，武大摄协某会长，有足够的学习和交流的机会。</p>
      <p class="nText">6. 优秀摄影师附赠毕业季旅拍名额</p>
      <p class="title">摄影师入驻流程 :</p>
      <p class="nText">1. 我们的摄影师自助入驻页面仍在紧张开发中，目前只能手动入驻。</p>
      <p class="nText">2. 希望入驻的摄影师，需要经过学生认证以及平台审核组的审核才能加入。</p>
      <p class="nText">3. 有意入驻的摄影师请qq联系941878098。</p>
      <p class="title">友拍制作团队:</p>
      <p class="nText mid">华中科技大学联创团队</p>
      <p class="title">联系我们:</p>
      <p class="nText mid">邮件：youpaihust@163.com</p>
      <p class="nText mid">微信公众号：youpaihust</p>
      <p class="nText mid">电话：18986888887</p>
      <br/><br/><br/><br/><br/><br/>
    </div>
  </div>
</template>

<script>
import myXHeader from '../myXHeader.vue'

export default {
  name: 'phxIn',
  data () {
    return {
      showQa: false,
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
}
</style>
