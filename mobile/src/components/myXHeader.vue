<template lang="html">
  <div class="myXHeader">
    <sticky  :check-sticky-support="false">
  <x-header :class="{themesHead:isActive}" :leftOptions="{backText:'',showBack:true}">{{header}}</x-header>
</sticky>
  </div>
</template>

<script>
import {XHeader,Sticky} from 'vux'
export default {
  name: "myXHeader",
  data () {
    return{
      isActive: true,
    }
  },
  components: {
    XHeader,
    Sticky,
  },
  props:{
    header: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss">
@import "static/px2rem.scss";

.myXHeader{
  .vux-header {
    position: relative;
    box-sizing: border-box;
    background-color: #343844;
    height: px2rem(170);
  }
  .vux-header .vux-header-title,.vux-header h1 {
    margin: 0 88px;
    margin-left: 100px;
    line-height: px2rem(170);
    text-align: center;
    height: px2rem(170);
    font-size: d2rem(12);
    font-weight: normal;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
  }
  .vux-header .vux-header-left,.vux-header .vux-header-right {
    position: absolute;
    top: px2rem(55);
    display: block;
    font-size: px2rem(60);
    line-height:px2rem(60);
    color: #fff;
  }
  .vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button {
    color: #fff;
  }
  .vux-header .vux-header-left .left-arrow {
    position: absolute;
    width: px2rem(40);
    height: px2rem(80);
    top: -5px;
    left: -5px;
    color: #fff;
    opacity: 1;
    &:before {
      opacity: 1;
      content: "";
      position: absolute;
      width: px2rem(40);
      height: px2rem(40);
      border: 1px solid #fff !important;
      border-width: 1px 0 0 1px !important;
      transform: rotate(315deg);
      top: px2rem(25);
      left: px2rem(44);
    }
  }
}
</style>
