<template lang="html">
  <div>
  <themeTitle :my-title="themeRecTitle" linkTo="themes" :notPhx="notPhx"></themeTitle>
    <div v-for="item in list">
      <masker color="34,38,44">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">{{item.pinyin}}</span>
        </div>
      </masker>
      <home-gap></home-gap>
    </div>
  </div>
</template>

<script>
import themeTitle from "../themeTitle.vue"
import { Masker } from 'vux'
import homeGap from "../homeGap.vue"

export default {
  name: "themeRec",
  data: function () {
    let list = new Array();
    return {
      notPhx: true,
      themeRecTitle : "主题推荐",
      list,
      isActive: true,
    }
  },
  created () {
    this.$http.get('/api/theme').then((res)=>{
      let x;
      let coverObj={
        title: '',
        img: '',
        pinyin: '',
      };
      let list = new Array();

      for(x in res.data){
        let name = res.data[x].name.split(' ');
        coverObj.title=name[0];
        coverObj.pinyin=name.slice(1).toString().replace(',',' ');
        coverObj.img=res.data[x].cover.compressed_path;
        list.push(coverObj);
      };
      this.list=list;
    })
  },
  components: {
    themeTitle,
    Masker,
    homeGap,
  }
}
</script>

<style lang="scss" scoped>
@import "static/px2rem.scss";

.m-img {
  padding-bottom: 47.5%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-size: px2rem(60);
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: px2rem(60);
  padding-top: 4px;
  display: inline-block;
  margin-top: 5px;
}

</style>
