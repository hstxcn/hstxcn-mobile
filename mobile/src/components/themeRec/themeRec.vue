<template lang="html">
  <div>
  <themeTitle :my-title="themeRecTitle" linkTo="themes"></themeTitle>
    <div v-for="item in list">
      <masker color="34,38,44">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">{{item.pinyin}}</span>
        </div>
      </masker>
      <home-gap></home-gap>
    </div>
  </div>
</template>

<script>
import themeTitle from "../themeTitle.vue"
import { Masker } from 'vux'
import homeGap from "../homeGap.vue"

export default {
  name: "themeRec",
  data: function () {
    return {
      themeRecTitle : "主题推荐",
      list: [{
        title: '毕 业 季',
        img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg',
        pinyin: 'bì yè jì'
      }, {
        title: '街 拍',
        img: 'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg',
        pinyin: 'jiē pāi'
      }, {
        title: '闺 蜜',
        img: 'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg',
        pinyin: 'guī mì'
      }],
      isActive: true,
    }
  },
  components: {
    themeTitle,
    Masker,
    homeGap,
  }
}
</script>

<style lang="scss" scoped>
@import "static/px2rem.scss";

.m-img {
  padding-bottom: 47.5%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-size: px2rem(60);
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: px2rem(60);
  padding-top: 4px;
  display: inline-block;
  margin-top: 5px;
}

</style>
