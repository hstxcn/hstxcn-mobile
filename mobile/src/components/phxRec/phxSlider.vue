<template lang="html">
  <div class="phxSliderWap">
    <div class="phxRecInfo">
      <router-link to="phx">
      <div class="infoLeft">
        <mu-avatar slot="left" :src="phxAvatar" :class="{avaStyle: isActive}"/>
        <div class="phxBtn">
        <mu-flat-button :label="phxName" :labelClass="{labelStyle: isActive}">
        </mu-flat-button>
        </div>
      </div>
      </router-link>
      <div class="infoRight">
        <heart></heart>
      </div>
    </div>
  <div class="phxSlider">
    <swiper :options="phxSliderOption">
      <swiper-slide>
        <img data-src="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <swiper-slide>
        <img data-src="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/three_sisters_wilderness_0.jpg" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <swiper-slide>
        <img data-src="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/snoqualmie_pass_0.jpg" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <swiper-slide>
        <img data-src="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/mount_rainier.jpg" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <swiper-slide>
        <img data-src="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/yosemite_national_park_0.jpg" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <swiper-slide>
        <img data-src="https://avatars3.githubusercontent.com/u/14019524?v=3&s=466" class="swiper-lazy">
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
import phxAvatar from './phxAvatar.png'

export default {
  name: "phxSlider",
  data() {
    let avatarSize = 50;
    return {
      isActive : true,
      phxAvatar,
      phxName: "摄影师名字",
      avatarSize,
      phxSliderOption: {
        // pagination: '.swiper-pagination',
        // paginationClickable: true,
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        lazyLoadingInPrevNextAmount: 2,
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
  }
}
</script>

<style lang="scss" >@import "static/px2rem.scss";
.phxSliderWap{
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
      }
      .swiper-slide img {
          width: auto;
          height: px2rem(590);
          max-width: 100%;
          max-height: 100%;
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
