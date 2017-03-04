<template lang="html">
  <div>
  <themeTitle :my-title="phxRecTitle" linkTo="recs" :notPhx="notPhx"></themeTitle>
  <phx-slider v-for="Obj in phxRecs" :srcArr="Obj.srcArr"
  :phxName="Obj.phxName" :phxId="Obj.phxId"></phx-slider>
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
    let phxObj={
      srcArr: [],
      phxName: '',
      phxId: '',
    };
    let phxRecs = [];
    this.$http.get('/api/home/photographer').then((res)=>{
      let x;
      for(x in res.data){
        // console.log(phxObj.srcArr);
        phxObj.phxName=res.data[x].name;
        phxObj.phxId=res.data[x].id;
        phxRecs.push(phxObj);
        // phxObj.srcArr=[];
      }

      this.phxRecs=phxRecs;
      // console.log(this.phxRecs);
    })
  }
}
</script>

<style lang="css">
</style>
