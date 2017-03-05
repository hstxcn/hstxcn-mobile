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

  <picNails v-for="(colInfo,index) in colArr"
  :colInfo="colInfo" :index="index"></picNails>


</div>
</template>

<script>
import bg01 from './phxAvatar.png'



import picNails from './picNails.vue'

export default {
  name: "picShow",
  data() {
    let colArr = [];
    return {
      bg01,
      colArr,
    }
  },
  methods : {
    fetchData: function (){
      let colUrl = '/api/photographer/'+this.phxId+'/collection';
      let colArr = [];
      this.$http.get(colUrl).then((res)=>{
        // console.log(res);
        let x,y;
        for(x in res.data){
          // console.log(x);
          let colObj = {
            images: [],
            phxName: '',
          };
          for(y in res.data[x].images){
            let imgObj = {
              croped_path: '',
              compressed_path: '',
            };
            // console.log(y);
            // console.log(res.data[x].images[y].croped_path)
            imgObj.croped_path=res.data[x].images[y].croped_path;
            // console.log(imgObj.croped_path)
            imgObj.compressed_path=res.data[x].images[y].compressed_path;
            imgObj.path=res.data[x].images[y].path;
            // console.log(imgObj);
            colObj.images.push(imgObj);

            // console.log('this is img');
            // console.log(colObj.images[1]);
            // console.log('y:'+y);
            }
            // console.log(JSON.stringify(colObj.images));
            colObj.phxName=res.data[x].photographer.name;
            colArr.push(colObj);
            // console.log(colObj);
            // console.log('x:'+x);
          }
          this.colArr=colArr;
          console.log(colArr);
          // let str = JSON.stringify(this.colArr);
          // console.log(str);
        }
      )
    }
  },
  created () {
    this.fetchData();
  },
  watch:{
    phxId: function(to,from){
      this.fetchData();
    }
  },
  components: {
    picNails,
  },
  props: {
    phxId: {
      type: String,
      required: true,
    },
  }

}
</script>

<style lang="scss">@import "static/px2rem.scss";
@import '../../../node_modules/blueimp-gallery/css/blueimp-gallery.min.css';
.picShow {
    position: relative;

    .blueimp-gallery > .indicator > li {
        width: px2rem(30);
        height: px2rem(30);
        border-radius: px2rem(15);
        margin: px2rem(20) px2rem(10) 0;
    }
}
</style>
