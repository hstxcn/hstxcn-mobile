<template lang="html">
  <div class="phxHome">
    <myXHeader header="摄影师主页" :showQa="showQa"></myXHeader>
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
        <router-link :to="detailUrl">
        <div class="phxBtnRight">
          私洽
        </div>
        </router-link>
      </div>
      <div class="tags">
        <div class="tagLogo"><img src="./tagicon.svg" alt=""></div>
        <div class="tagContents">
          <mu-chip v-for="tag in tags" class="chipTag" backgroundColor="#fff">{{tag.text}}</mu-chip>
        </div>
      </div>
    </div>
    <homeGap  v-bind:style="gapStyle"></homeGap>
    <themeTitle :my-title="phxHomeTitle" linkTo="themes" :notPhx="notPhx"></themeTitle>

    <div class="photos">
      <picShow :phxId="phxId"></picShow>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import heart from "../heart.vue"
import phxAvatar from './phxAvatar.png'
import homeGap from '../homeGap.vue'
import myXHeader from '../myXHeader.vue'
import picShow from './picShow.vue'
import themeTitle from "../themeTitle.vue"

export default {
  name: "phxHome",
  data () {
    let zanTotal = 204;
    let tags = ['女','华科','美女摄影师','小清新','300/套','华科',];
    var gapStyle = {
      backgroundColor: "#eceff1",
    };
    let phxId='';
    let phxBg='';
    return {
      showQa:true,
      isActive:true,
      phxAvatar,
      phxBg,
      phxName: "设计师名字",
      phxInfo: "个人简介",
      zanTotal,
      tags,
      gapStyle,
      phxHomeTitle: "作品集",
      notPhx: false,
      phxId,
      detailUrl: '',
      srcArr:[],
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
  components:{
    homeGap,
    myXHeader,
    picShow,
    themeTitle,
  },
  created () {
    this.phxId = this.$route.params.id;
  },
  methods : {
    fetchData () {

      let phxUrl = '/api/photographer/'+this.$route.params.id;
      this.detailUrl = '/details/'+this.$route.params.id;
      this.$http.get(phxUrl).then((res)=>{
        this.phxName = res.data.name;
        this.phxInfo = res.data.description;
        this.tags = res.data.tags;
        if(res.data.major){
          let obj = {
            text: res.data.major,
            id: null,
          }
          this.tags.push(obj);
        }
        this.zanTotal = res.data.likes;
        if(res.data.avatar.croped_path){
          this.phxAvatar=res.data.avatar.croped_path;
        }
        let x;
        let srcArr =[];
        let images = res.data.collection.images;
        for (x in images){
            srcArr.push(images[x].compressed_path);
        }
        this.srcArr = srcArr;
        // console.log(this.srcArr);
        let length = this.srcArr.length;
        let index = Math.floor((Math.random())*length);
        this.phxBg=this.srcArr[index];
      })
    },
  },
  activated () {
    // console.log('activated');
    this.phxId = this.$route.params.id;
    // console.log(this.phxId);
    this.fetchData();
  },
  watch:{
    phxId: function(){
      this.fetchData();
    }
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
      overflow: hidden;
      text-align: center;
      img{
        margin: 0 auto;
        width: auto;
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
      margin: px2rem(30) px2rem(50) 0 px2rem(50);
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
        min-height: px2rem(50);
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
