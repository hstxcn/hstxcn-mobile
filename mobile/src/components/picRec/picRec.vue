<template lang="html">
<div>
  <themeTitle :my-title="picRecTitle" linkTo="recs" :notPhx="notPhx"></themeTitle>
  <pic-slider v-for="Obj in picRecs" :srcArr="Obj.srcArr"
  :phxName="Obj.phxName" :model="Obj.model" :colId="Obj.id"></pic-slider>
</div>
</template>

<script>
import themeTitle from "../themeTitle.vue"
import picSlider from "./picSlider.vue"

export default {
  name: "picRec",
  data: function () {
    let picRecs = [];
    return {
      picRecs,
      picRecTitle: "作品推荐",
      notPhx: true,
    }
  },
  components: {
    themeTitle,
    picSlider,
  },
  created () {
    let picObj={
      srcArr: [],
      phxName: '',
      model: '',
      colId: '',
    };
    let picRecs = [];
    this.$http.get('/api/home/collection').then((res)=>{
      let x,y;
      for(x in res.data){
        for(y in res.data[x].images){
          picObj.srcArr.push(res.data[x].images[y].croped_path);
        }
        // console.log(picObj.srcArr);
        picObj.phxName=res.data[x].photographer.name;
        picObj.model=res.data[x].model_name;
        picObj.id=res.data[x].id;
        picRecs.push(picObj);
        // picObj.srcArr=[];
      }

      this.picRecs=picRecs;
      // console.log(this.picRecs);
    })
  }
}
</script>

<style lang="css">
</style>
