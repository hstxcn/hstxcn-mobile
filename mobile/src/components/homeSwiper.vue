<template>
<!-- swiper -->
<swiper :options="swiperOption">
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
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazyLoading: true,
        lazyLoadingInPrevNext : true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "static/px2rem.scss";

.swiper-slide {
  width: px2rem(1080);
  height: px2rem(650);
    text-align: center;
    font-size: 18px;
}
.swiper-slide img {
    width: px2rem(1080);
    height: px2rem(650);
    max-width: 100%;
    max-height: 100%;
}
</style>
