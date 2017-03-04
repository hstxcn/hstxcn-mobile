<template lang="html">
  <div>
  <div class="picSlider">
    <swiper :options="picSliderOption">
      <swiper-slide v-for="src in srcArr">
        <img :data-src="src" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
       <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div class="swiper-scrollbar" slot="scrollbar"></div>
     </swiper>
  </div>
  <div class="picRecInfo">
    <div class="infoLeft"><span class="phx">摄影师:{{phxName}}</span> | <span>出镜:{{model}}</span></div>
    <div class="infoRight">
      <heart :colLikesId="colId"></heart>
    </div>
  </div>
  </div>
</template>

<script>
import heart from "../heart.vue"
export default {
  name: "picSlider",
  data() {
    return {
      picSliderOption: {
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
    model:{
      type: String,
      required:true,
    },
    colId:{
      type: String,
    }
  }
}
</script>

<style lang="scss">@import "static/px2rem.scss";
.picSlider {
    width: px2rem(1080);
    height: px2rem(590);
    padding-left: px2rem(44);
    margin-top: px2rem(30);
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
.picRecInfo {
    width: px2rem(1080);
    height: px2rem(140);
    .infoLeft {
        display: inline-block;
        font-size: px2rem(40);
        color: #949596;
        margin-left: px2rem(44);
        margin-top: px2rem(45);
        .phx {
            color: #000;
        }
    }
    .infoRight {
        display: inline-block;
        float: right;
        margin-top: px2rem(40);
        margin-right: px2rem(40);
    }
}
</style>
