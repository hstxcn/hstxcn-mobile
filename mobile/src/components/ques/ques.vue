<template lang="html">
  <div class="ques">
      <myXHeader header="常见问题" :showQa="showQa"></myXHeader>
      <div class="text">
        <div class="textImg">
        </div>
        <p class="title1 mid">── 华科约拍平台</p>
        <p class="mid">要约拍，来友拍。</p>
        <p class="mid">当前版本1.1.1</p>
      </div>
      <div class="text">
        <p class="title">Q: 友拍是什么?</p>
        <p>A: 友拍平台是华科联创团队打造的一款公益webAPP，产品目标是连接所有优秀校园摄影师和
          所有爱美、追求美、希望留住美的同学。</p>
      </div>
      <div class="text">
        <p class="title">Q: 关于摄影师、定价与照片交付</p>
        <p>A: 友拍入驻摄影师均为优秀大学生摄影师，摄影价格、支付方式、照片交付方式和日期由
          约拍个人与摄影师共同协商决定。</p>
      </div>
      <div class="text">
        <p class="title">Q: 收费可以便宜一些吗？</p>
        <p>A: 摄影师于平台上定价为标准定价，具体收费及收费方式由摄影师与约拍个人共同协商决定。</p>
      </div>
      <div class="text">
        <p class="title">Q: 没有约拍经验这么办</p>
        <p>A: 友拍推崇多元审美价值观，将每人不一样的美自然地表现出来。相关tips可关注友拍YOUPAI公众号，
          查看摄影约拍提示或后台回复公众号进行询问，确定拍摄意向在挑选摄影师后可向摄影师详细咨询相关建议。</p>
      </div>
      <div class="text">
        <p class="title">Q: 后期评价与反馈</p>
        <p>A: 关于友拍平台、约拍服务、摄影师的评价和相关建议可直接于“友拍YOUPAI”
          公众平台回复或发送至youpaihust@163.com。</p>
      </div>
      <br/><br/><br/><br/><br/><br/>
</template>

<script>
import myXHeader from '../myXHeader.vue'

export default {
  name: 'ques',
  data () {
    return {
      showQa : false,
    }
  },
  components: {
    myXHeader,
  },
}
</script>

<style lang="scss">
@import "static/px2rem.scss";
@import "../../common/scss/text.scss";

.text{
  margin-top:px2rem(60);

  p{
      margin:px2rem(20) px2rem(120);
  }
  .textImg{
    width: px2rem(480);
    height: px2rem(187);
    margin-top: px2rem(108);
    margin-left: px2rem(300);
    background-image: url('./youpai.png');
    background-size: 100%;
    margin-bottom: px2rem(92);
  }
  p.mid{
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

}
</style>
