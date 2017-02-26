<template lang="html">
  <div class="homeMenu">
    <circle-menu type='top' :number='4' circle mask="white" :colors="colors">
      <mu-float-button class='homeMenuBtn' v-bind:class="[clicked?btnClicked:btnNone]" slot="item_btn" @click="changeBg"/>
      <div class="homeMenuItem" slot="item_1" @click="toRecs">我要约拍</div>
      <div class="homeMenuItem" slot="item_2">摄影师入驻</div>
      <div class="homeMenuItem" slot="item_3" @click="toAboutUs">关于我们</div>
      <div class="homeMenuItem" slot="item_4" @click="toBonus">打赏我们</div>
    </circle-menu>
  </div>
</template>

<script>
import CircleMenu from 'vue-circle-menu'

export default {
  name: "homeMenu",
  data () {
    return {
      colors: ['#fff', '#fff', '#fff', '#fff','#fff'],
      bonus: 'bonus',
      clicked: false,
      btnClicked: 'btnClicked',
      btnNone: 'btnNone',
    }
  },
  components: {
    CircleMenu
  },
  methods: {
    changeBg () {
      this.clicked=!this.clicked;
    },
    toBonus () {
      this.$root.$router.push('bonus');
    },
    toAboutUs () {
      this.$root.$router.push('aboutUs');
    },
    toRecs () {
      this.$root.$router.push('recs');
    },
  },
  mounted () {
    let self = this;
    let masker = document.getElementsByClassName('oy-mask-white')[0];
    masker.addEventListener("click",function(){
      if(self.clicked){
        self.clicked= false;
      }

    })
  }
}
</script>

<style lang="scss">
@import "static/px2rem.scss";

.homeMenu{
  .homeMenuBtn{
    width: px2rem(168);
    height: px2rem(168);
    background-size:100%;
    border: none;
    border-radius: px2rem(84);
  }
  .homeMenuBtn.btnNone{
    background: url(menu.svg) no-repeat;
  }
  .homeMenuBtn.btnClicked{
    background: url(menuClose.svg) no-repeat;
  }
  .oy-menu-btn{
    width: px2rem(1);
    height: px2rem(1);
  }
  .oy-mask-white{
    background-color: rgba(52, 56, 68, 0.6);
  }
  .top .oy-menu-group.open .btn-list{
    .oy-menu-item{
      width:px2rem(20);
      height: px2rem(20);

    }
    .oy-menu-item.oy-menu-item_1{
      top: - px2rem(169) ;
    }
    .oy-menu-item.oy-menu-item_2{
      top: - px2rem(316);
    }
    .oy-menu-item.oy-menu-item_3{
      top: - px2rem(463);
    }
    .oy-menu-item.oy-menu-item_4{
      top: - px2rem(610);
    }

  }
  .homeMenuItem{
    z-index:10;
    font-size: d2rem(9);
    width:px2rem(274);
    height: px2rem(87);
    line-height: px2rem(87);
    border-radius: px2rem(44);
    background-color: #fff;
    margin-left: px2rem(-130);
  }
}
</style>
