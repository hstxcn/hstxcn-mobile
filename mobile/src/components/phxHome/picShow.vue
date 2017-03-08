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
  <mu-infinite-scroll :loading="loading" :loadingText="loadingText" @load="loadMore"/>

</div>
</template>

<script>
import bg01 from './phxAvatar.png'



import picNails from './picNails.vue'

export default {
  name: "picShow",
  data() {
    let colArr = [];
    let loadingText ="正在加载";
    return {
      loading: false,
      loadingText,
      bg01,
      colArr,
      offset:0,
    }
  },
  methods : {
    fetchData: function (){
      let colUrl = '/api/photographer/'+this.phxId+'/collection?limit=2&offset='+this.offset;
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
          this.colArr=this.colArr.concat(colArr);
          this.loading=false;
          // console.log(colArr);
          // let str = JSON.stringify(this.colArr);
          // console.log(str);
        }
      )
    },
    loadMore () {
      this.loading = true;
      this.offset+=2;
      this.fetchData();
    },
  },
  created () {
    this.fetchData();
  },
  watch:{
    phxId: function(to,from){
      this.colArr=[];
      this.offset=0;
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
  },

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
    .blueimp-gallery>.title{
      font-size: px2rem(50);
    }
    .blueimp-gallery>.close{
      font-size: px2rem(60);
    }
}
</style>
