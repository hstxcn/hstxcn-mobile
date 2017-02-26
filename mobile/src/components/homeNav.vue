<template lang="html">
  <div>
      <flexbox :gutter="0">
          <flexbox-item>
            <div class="homenav-flex">
              <mu-icon-button v-bind:class="{homeNavBtn: isActive}">
                <span class="homenavicon pticon-hangpai"></span>
              </mu-icon-button>
          </div>
        </flexbox-item>
          <flexbox-item>
            <div class="homenav-flex">
              <mu-icon-button v-bind:class="{homeNavBtn: isActive}">
            <span class="homenavicon pticon-single"></span>
          </mu-icon-button>
        </div>
      </flexbox-item>
          <flexbox-item><div class="homenav-flex"><mu-icon-button v-bind:class="{homeNavBtn: isActive}">
            <span class="homenavicon pticon-multis"></span>
          </mu-icon-button></div></flexbox-item>
          <flexbox-item><div class="homenav-flex"><mu-icon-button v-bind:class="{homeNavBtn: isActive}">
            <span class="homenavicon pticon-team"></span>
          </mu-icon-button></div></flexbox-item>
      </flexbox>
      <flexbox :gutter="0">
          <flexbox-item><div class="homenav-flex"><div class="homeNavTitle">航拍&360</div></div></flexbox-item>
          <flexbox-item><div class="homenav-flex"><div class="homeNavTitle">个人</div></div></flexbox-item>
          <flexbox-item><div class="homenav-flex"><div class="homeNavTitle">多人</div></div></flexbox-item>
          <flexbox-item><div class="homenav-flex"><div class="homeNavTitle">团体</div></div></flexbox-item>
      </flexbox>
  </div>
</template>

<script>
import {
  Flexbox,
  FlexboxItem
} from 'vux'

export default {
  data: function(){
    return {
      isActive: true,
    }
  },
  components: {
    Flexbox,
    FlexboxItem
  }
}
</script>

<style lang="scss">@import "static/px2rem.scss";
@import "../common/scss/icon.css";

.homenav-flex {
    height: px2rem(180);
    text-align: center;
    color: #000;
    background-clip: padding-box;
    span.homenavicon {

        font-size: px2rem(85);
    }
    .homeNavBtn{
      margin-top: px2rem(50);
      width:  px2rem(180);
      height:  px2rem(180);
      cursor: pointer;
    }
    .homeNavTitle{
      padding-top: px2rem(50);
      font-size: px2rem(35);
    }

}
</style>
