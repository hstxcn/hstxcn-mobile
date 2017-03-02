<template lang="html">
  <div class="picShow">
  <div id="blueimp-gallery" class="blueimp-gallery">
    <div class="slides"></div>
    <h3 class="title"></h3>
    <a class="prev">‹</a>
    <a class="next">›</a>
    <a class="close">×</a>
    <a class="play-pause"></a>
    <ol class="indicator"></ol>
  </div>
  <div class="galCnt">
    第一集
  </div>
  <div id="links" class="links">
    <flexbox :gutter="0" wrap="wrap">
      <flexbox-item :span="1/3"><a href="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg" title="Banana">
        <img src="https://farm1.static.flickr.com/781/32214300143_e2ea16927a_s.jpg" alt="Banana">
      </a>
    </flexbox-item>
      <flexbox-item :span="1/3"><a href="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg" title="Apple">
        <img src="https://farm1.static.flickr.com/781/32214300143_e2ea16927a_s.jpg" alt="Banana">
      </a>
    </flexbox-item>
      <flexbox-item :span="1/3"><a href="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg" title="Orange">
        <img :src="bg01" alt="Banana">
      </a>
    </flexbox-item>
    </flexbox>



</div>

</div>
</template>

<script>
import Gallery from 'blueimp-gallery/js/blueimp-gallery.min.js';
import bg01 from './phxAvatar.png'
import {
  Flexbox,
  FlexboxItem
} from 'vux'

export default {
  name: "picShow",
  data() {
    return {
      bg01,
    }
  },
  mounted() {
    this.$nextTick(function() {
      document.getElementById('links').onclick = function(event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {
            index: link,
            event: event,
            stretchImages: true,
          },
          links = this.getElementsByTagName('a');
        Gallery(links, options);
      };

    })
  },
  components: {
    Flexbox,
    FlexboxItem,
  }

}
</script>

<style lang="scss">@import "static/px2rem.scss";
@import '../../../node_modules/blueimp-gallery/css/blueimp-gallery.min.css';
.picShow {
    position: relative;
    .links {
        text-align: center;
        width: px2rem(855);
        // height: px2rem(855);
        // border: 1px solid #f00;
        float: right;
        margin: px2rem(32);
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

    .galCnt{
      position: absolute;
      font-size: d2rem(10);
      color: #343844;
      top:px2rem(152);
      left: px2rem(42);
    }

    .blueimp-gallery > .indicator > li {
        width: px2rem(30);
        height: px2rem(30);
        border-radius: px2rem(15);
        margin: px2rem(20) px2rem(10) 0;
    }
}
</style>
