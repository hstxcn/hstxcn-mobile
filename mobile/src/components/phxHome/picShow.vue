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
  <div id="links" class="links">
    <a href="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg" title="Banana">
      <img src="https://farm1.static.flickr.com/781/32214300143_e2ea16927a_s.jpg" alt="Banana">
    </a>
    <a href="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg" title="Apple">
      <img :src="bg01" alt="Banana">
    </a>
    <a href="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg" title="Orange">
      <img :src="bg01" alt="Banana">
    </a>
</div>

</div>
</template>

<script>
import Gallery from 'blueimp-gallery/js/blueimp-gallery.min.js';
import bg01 from './phxAvatar.png'

export default {
  name: "picShow",
  data () {
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
            event: event
          },
          links = this.getElementsByTagName('a');
        Gallery(links, options);
      };

    })
  }

}
</script>

<style lang="scss">
@import "static/px2rem.scss";
@import '../../../node_modules/blueimp-gallery/css/blueimp-gallery.min.css';
.picShow{
  .links{
text-align: center;

    a{
      text-align: center;
      img{
        border: 0;
        vertical-align: middle;
      }

    }
  }

  .blueimp-gallery>.indicator>li{
    width: px2rem(30);
    height: px2rem(30);
    border-radius: px2rem(15);
    margin:px2rem(20) px2rem(10) 0
  }
}
</style>
