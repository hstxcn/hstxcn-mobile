<template>
<!-- swiper -->
<div class="homeSwiper">
<swiper :options="swiperOption">
  <swiper-slide v-for="src in srcArr">
    <img :data-src="src" class="swiper-lazy">
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</div>
</template>

<script>
export default {
  data() {
    let srcArr = new Array();
    return {
      srcArr,
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
  },
  created () {
    this.$http.get('/api/home/banner').then((res)=>{
      // this.srcArr=res.data.srcArr;
      // console.log(res.data);
      let coverArr = new Array();
      let x;
      for(x in res.data){
        coverArr.push(res.data[x].cover.compressed_path);
      };
      // console.log(coverArr);
      this.srcArr = coverArr;

    }).catch((error) => {
    console.log(error);
  });
  }

}
</script>

<style lang="scss" scoped>
@import "static/px2rem.scss";
.homeSwiper{
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
}
</style>
