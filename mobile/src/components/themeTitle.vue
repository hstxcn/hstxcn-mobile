<template lang="html">
  <div class="themeTitle">
    <div class="themeTitleLeft">
      <span class="pticon-fangkuai"></span>{{myTitle}}
    </div>
      <router-link :to="linkTo">
    <div class="themeTitleRight">

      <mu-flat-button v-bind:class="{buttonStyle: isActive}"  :labelClass="{labelStyle: isActive}">
        MORE <span class="pticon-errow-right"></span>
      </mu-flat-button>

    </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "themeTitle",
  data: function(){
    let isActive = true;

    return {
      isActive,
    }
  },
  props: {
    myTitle: {
      type: String,
      required: true,
    },
    linkTo: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss" >
@import "static/px2rem.scss";

.themeTitle{
  width: px2rem(1080);
  height: px2rem(150);
  border-bottom: px2rem(2) solid #eceff1;
  color: #2c3239;
  .themeTitleLeft{
    font-size: d2rem(12);
    line-height: px2rem(150);
    display: inline-block;
    color: #2c3239;
    span{
      display: inline-block;
      margin: 0 px2rem(50);
    }
  }
  .themeTitleRight{
    display: inline-block;
    float: right;
    color: #2c3239;
  }

  .buttonStyle{
    width: px2rem(200);
    height: px2rem(150);
  }
  .mu-flat-button-wrapper{
    font-size: d2rem(10);
    white-space: nowrap;
    color: #2c3239;
    span{
      display: inline-block;
      margin: 0 px2rem(20);
    }
  }
  .labelStyle{
    font-size: d2rem(10);
    white-space: nowrap;
    color: #2c3239;
  }
}


</style>
