<template lang="html">
  <div class="picNails clearfix">
          <div class="galCnt">
            第{{index|indexToWord}}集
          </div>
          <div ref="link" class="links">
            <flexbox :gutter="0" wrap="wrap">
              <flexbox-item v-for="imgs in colInfo.images" :span="1/3">
                <a :href="imgs.compressed_path" :title="imgTitle">
                  <img :src="imgs.croped_path" alt="Banana">
                </a>
              </flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<script>
import Gallery from 'blueimp-gallery/js/blueimp-gallery.min.js';

import {
  Flexbox,
  FlexboxItem
} from 'vux'

export default {
  name: 'picNails',
  data () {
    return {
        imgTitle:'',
    }
  },
  props : {
    colInfo:{
      type: Object,
      required: true,
    },
    index:{
      type: Number,
      required: true,
    }
  },
  filters: {
    indexToWord : (n)=>{
      let numArr=['一','二','三','四','五','六','七','八','九','十','十一','十二',
      '十三','十四','十五','十六','十七','十八','十九','二十'];
      return numArr[n];
    }
  },
  mounted() {
    this.imgTitle='要约拍,来友拍。--'+this.colInfo.phxName;
    this.$nextTick(function() {
      // console.log(this.$refs);
    this.$refs.link.onclick = function(event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {
            index: link,
            event: event,
            fullScreen: true,
            slideshowInterval: 3000,
          },
          links = this.getElementsByTagName('a');
        Gallery(links, options);
      };
    })
  },
  components : {
    Flexbox,
    FlexboxItem,
  }
}
</script>

<style lang="scss">
@import "static/px2rem.scss";
.clearfix:after{
content: "020";
display: block;
height: 0;
clear: both;
visibility: hidden;
}
.picNails{
    border-bottom: px2rem(1) solid #eceff1;
  .links {
      text-align: center;
      width: px2rem(855);
      // height: px2rem(855);
      // border: 1px solid #f00;
      float: right;
      margin: px2rem(32) px2rem(32) px2rem(32) 0;
      display: inline-block;
      a {
          text-align: center;
          height: px2rem(264);
          display: block;
          margin: px2rem(10);
          // border: 1px solid #f00;
          img {
              border: 0;
              vertical-align: middle;
              width: 100%;
              height: 100%;
          }

      }
  }

  .galCnt {
      display: inline-block;
      font-size: d2rem(10);
      color: #343844;
      margin-top: px2rem(152);
      margin-left:px2rem(22);
      margin-right: 0;
  }
}
</style>
