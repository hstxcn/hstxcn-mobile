<template lang="html">
  <div>
  <themeTitle :my-title="phxRecTitle" linkTo="recs" :notPhx="notPhx"></themeTitle>
  <phx-slider v-for="Obj in phxRecs" :srcArr="Obj.srcArr"
  :phxName="Obj.phxName" :phxId="Obj.phxId" :phxAvatar="Obj.phxAvatar"></phx-slider>
  </div>
</template>

<script>
import themeTitle from "../themeTitle.vue"
import phxSlider from "./phxSlider.vue"

export default {
  name: "phxRec",
  data: function (){
    let phxRecs = [];
    return {
      phxRecs,
      phxRecTitle: "摄影师推荐",
      notPhx: true,
    }
  },
  components: {
    themeTitle,
    phxSlider,
  },
  created () {

    this.$http.get('/api/home/photographer').then((res)=>{
      let x;

      let phxRecs = [];
      for(x in res.data){
        let phxObj={
          srcArr: [],
          phxName: '',
          phxId: '',
          phxAvatar: '',
        };
        // console.log(phxObj.srcArr);
        phxObj.phxName=res.data[x].name;
        phxObj.phxId=res.data[x].id;
        phxObj.srcArr=res.data[x].collection.images;
        if(res.data[x].avatar.compressed_path){
          phxObj.phxAvatar=res.data[x].avatar.compressed_path;
        }
        phxRecs.push(phxObj);

      }

      this.phxRecs=phxRecs;
      // console.log(this.phxRecs);
    })
  }
}
</script>

<style lang="css">
</style>
