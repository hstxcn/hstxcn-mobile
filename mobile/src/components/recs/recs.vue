<template lang="html">
  <div class="recs">
    <myXHeader header="推荐" :showQa="showQa"></myXHeader>
    <recOrder></recOrder>
    <phxSlider v-for="phxInfo in phxInfos" :srcArr="phxInfo.srcArr"
      :phxName="phxInfo.phxName" :phxId="phxInfo.phxId" :phxAvatar="phxInfo.phxAvatar"></phxSlider>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" :loadingText="loadingText" @load="loadMore"/>
  </div>
</template>

<script>
import myXHeader from "../myXHeader.vue"
import recOrder from "./recOrder.vue"
import phxSlider from '../phxRec/phxSlider.vue'

export default {
  name: "recs",
  data () {
    let loadingText = '正在加载';
    return {
      showQa : true,
      phxInfos:[],
      loading: false,
      scroller: null,
      loadingText,
    }
  },
  created () {
    let phxsUrl = '/api/photographer'
    this.$http.get(phxsUrl).then((res)=>{

      let x;
      let phxInfos=[];
      for(x in res.data){
        let phxInfo = {
          srcArr: [],
          phxName: '',
          phxId: '',
          phxAvatar: '',
        };
        // console.log(JSON.stringify(res.data[x].collection))
        let tc = res.data[x].collection;
        if(tc){
          phxInfo.srcArr=res.data[x].collection.images;
        }
        phxInfo.phxName=res.data[x].name;
        phxInfo.phxId=res.data[x].id;
        phxInfo.phxAvatar=res.data[x].avatar.croped_path;
        phxInfos.push(phxInfo);
      }
      // console.log(JSON.stringify(phxInfos));
      this.phxInfos=phxInfos;

    })
  },
  mounted () {

  },
  components: {
    myXHeader,
    recOrder,
    phxSlider,
  },
  methods: {
    loadMore () {
      this.loading = true;


    }
  }
}
</script>

<style lang="scss">
@import "static/px2rem.scss";

.mu-infinite-scroll{
  height: px2rem(100);
  line-height: px2rem(100);
  width: 100%;
}
.mu-infinite-scroll-text{
  margin-left: px2rem(32);
  font-size: px2rem(48);
}
</style>
