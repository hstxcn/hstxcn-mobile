<template lang="html">
  <div class="phxSliderWap">
    <div class="phxRecInfo">
      <router-link :to="phxUrl">
      <div class="infoLeft">
        <mu-avatar slot="left" :src="phxAvatar" :class="{avaStyle: isActive}"/>
        <div class="phxBtn">
        <mu-flat-button :label="phxName" :labelClass="{labelStyle: isActive}">
        </mu-flat-button>
        </div>
      </div>
      </router-link>
      <div class="infoRight">
        <heart :phxLikesId="phxId"></heart>
      </div>
    </div>
  <div class="phxSlider">
    <swiper :options="phxSliderOption">
      <swiper-slide v-for="src in srcArr">
        <img :data-src="src.compressed_path" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
       <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div class="swiper-scrollbar" slot="scrollbar"></div>
     </swiper>
  </div>
  </div>
</template>

<script>
import heart from "../heart.vue"

export default {
  name: "phxSlider",
  data() {
    let avatarSize = 50;
    let phxUrl = 'phx/'+this.phxId;
    return {
      isActive : true,
      phxUrl,
      avatarSize,
      phxSliderOption: {
        // pagination: '.swiper-pagination',
        // paginationClickable: true,
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        lazyLoadingInPrevNextAmount: 1,
        autoplayDisableOnInteraction: false,
        slidesPerView: 'auto',
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
      }
    }
  },
  components: {
    heart,
  },
  props : {
    srcArr : {
      type : Array,
      required: true,
    },
    phxName:{
      type: String,
      required:true,
    },
    phxId:{
      type: String,
      required:true,
    },
    phxAvatar:{
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" >@import "static/px2rem.scss";
.phxSliderWap{
  border-bottom: px2rem(2) solid #eceff1;
  padding-bottom: px2rem(20);
  .phxSlider {
      width: px2rem(1080);
      height: px2rem(590);
      padding-left: px2rem(44);
      .swiper-container {
          overflow: visible;
      }
      .swiper-slide {
          width: 80%;
          height: px2rem(590);
          font-size: 18px;
          overflow: hidden;
      }
      .swiper-slide img {
          width: auto;
          height: px2rem(590);
      }
  }
  .phxRecInfo {
      width: 100%;
      height: px2rem(188);
      position: relative;
      padding-left: px2rem(44);
      .infoLeft {
          position: relative;
          display: inline-block;
          vertical-align: top;
          .phxBtn{
            position:absolute;
            top: px2rem(60);
            left: px2rem(100);
            height: px2rem(72);
            display:inline-block;
            .mu-flat-button{
              width: auto;
              line-height: 100%;
              height: px2rem(72);
              font-size: d2rem(9);
              font-weight: bold;
              white-space: nowrap;
            }
            .labelStyle{
              font-size: d2rem(9);
              font-weight: bold;
              white-space: nowrap;
            }
            .mu-flat-button-label{
              font-size: d2rem(9);
              font-weight: bold;
              white-space: nowrap;
            }
          }

          .avaStyle{
            width: px2rem(100);
            height: px2rem(100);
            margin-top: px2rem(44);
          }
      }
      .infoRight {
          position: absolute;
          right: px2rem(40);
          top: px2rem(65);
          // margin-top: px2rem(20);
      }
  }
}
</style>
