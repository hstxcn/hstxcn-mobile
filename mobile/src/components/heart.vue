<template lang="html">
  <div class="heart">
    <mu-flat-button :label="zanNum|toString" @click="zan" :class="{heartBtn:isActive}" :labelClass="{labelStyle: isActive}">
      <i v-bind:class="[red?pticonHeartB:pticonHeartA]"></i>
    </mu-flat-button>
  </div>
</template>

<script>
export default {
  name: "heart",
  data: function(){
    return {
      isActive:true,
      red: true,
      zanNum: 233,
      pticonHeartB: 'pticon-heartB',
      pticonHeartA: 'pticon-heartA',
    }
  },
  methods: {
    zan: function() {
      this.red = !this.red;
      if(this.red){
        this.zanNum--;
      }else{
        this.zanNum++;
      }
    }
  },
  filters: {
    toString: (n)=> n.toString(),
  }
}
</script>

<style lang="scss">
@import "static/px2rem.scss";

.heart{
  .heartBtn{
    font-size: d2rem(10);
    height: px2rem(72);
  }

  .labelStyle{
    font-size: d2rem(10);
  }
}
</style>
