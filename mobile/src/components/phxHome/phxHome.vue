<template lang="html">
  <div class="phxHome">
    <myXHeader header="摄影师主页"></myXHeader>
    <div class="phxHomeInfo">
      <div class="phxBg">
        <img :src="phxBg" alt="">
      </div>
      <div class="phxAvatar">
        <mu-avatar slot="left" :src="phxAvatar" :class="{avaStyle: isActive}"/>
      </div>
      <div class="phxName">{{phxName}}</div>
      <div class="phxInfo">{{phxInfo}}</div>
      <div class="phxHomeBtn">
        <div class="phxBtnLeft">
          <div class="pticon-heartA heart"></div>
          <div class="Num">{{zanTotal}}</div>
        </div>
        <div class="phxBtnRight">
          私洽
        </div>
      </div>
      <div class="tags">
        <div class="tagLogo"><img src="./tagicon.svg" alt=""></div>
        <div class="tagContents">
          <mu-chip v-for="tag in tags" class="chipTag" backgroundColor="#fff">{{tag}}</mu-chip>
        </div>
      </div>
    </div>
    <homeGap  v-bind:style="gapStyle"></homeGap>
    <div class="photos">
      <picShow></picShow>

    </div>
  </div>
</template>

<script>
import heart from "../heart.vue"
import phxAvatar from './phxAvatar.png'
import phxBg from './bg01.jpg'
import homeGap from '../homeGap.vue'
import myXHeader from '../myXHeader.vue'
import picShow from './picShow.vue'


export default {
  name: "phxHome",
  data () {
    let zanTotal = 204;
    let tags = ['女','华科','美女摄影师','小清新','300/套','华科',];
    var gapStyle = {
      backgroundColor: "#eceff1",
    };
    return {
      isActive:true,
      phxAvatar,
      phxBg,
      phxName: "设计师名字",
      phxInfo: "个人简介",
      zanTotal,
      tags,
      gapStyle,
    }
  },
  components:{
    homeGap,
    myXHeader,
    picShow,
  }
}
</script>

<style lang="scss">
@import "static/px2rem.scss";

.phxHome{
  .phxHomeInfo{
    position: relative;
    width: px2rem(1080);
    .phxBg{
      width: 100%;
      height: px2rem(650);
      img{
        width: 100%;
        height: 100%;
      }
    }

    .phxAvatar{
      position: absolute;
      width: px2rem(210);
      height: px2rem(210);
      left:50%;
      margin-left: px2rem(-105);
      margin-top: px2rem(-105);
      z-index: 1;
      .avaStyle{
        border: px2rem(10) solid #fff;
        width: px2rem(210);
        height: px2rem(210);
      }
    }

    .phxName{
      color: #343844;
      text-align: center;
      font-size: d2rem(12);
      font-size: bold;
      margin-top: px2rem(171);
    }
    .phxInfo{
      color: #343844;
      text-align: center;
      font-size: d2rem(8);
      margin-top: px2rem(30);
    }

    .phxHomeBtn{
      margin-top: px2rem(60);

      .phxBtnLeft{
        display: inline-block;
        vertical-align: middle;
        margin-left: px2rem(84);
        .heart{
          font-size: px2rem(60);
          display: inline-block;
        }

        .Num{
          display: inline-block;
          font-size: px2rem(60);
          line-height: px2rem(60);
          margin-left: px2rem(30);
        }
      }
      .phxBtnRight{
        display: inline-block;
        float: right;
        width: px2rem(214);
        height: px2rem(80);
        background-color: #21bebd;
        text-align: center;
        line-height:  px2rem(80);
        color: #fff;
        border-radius: px2rem(40);
        font-weight: bold;
        overflow: hidden;
        margin-right: px2rem(84);
        font-size: d2rem(10);
      }
    }

    .tags{
      position: relative;
      margin-top:px2rem(45);
      margin-bottom: px2rem(100);
      .tagLogo{
        position: absolute;
        width: px2rem(95);
        height: px2rem(95);
        left: px2rem(65);
        top: px2rem(25);
      }

      .tagContents{
        margin-left: px2rem(268);
        width: px2rem(812);

        .chipTag{

          border: px2rem(1) solid #343844;
          color:#343844;
          font-size: px2rem(38);
          line-height: px2rem(62);
          margin-right: px2rem(45);
          margin-top: px2rem(45);
          border-radius: px2rem(31);
        }
      }
    }

    .photos{

    }
  }
}
</style>
