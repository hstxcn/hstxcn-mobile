<template lang="html">
  <div class="myXHeader">

  <x-header :class="{themesHead:isActive}" :leftOptions="{backText:'',showBack:true}" on-click-title="handleClose3">
    {{header}}
    <span slot="right">
      <mu-icon-button ref="button3" @click.stop="toggle3">
        <span class="qaicon pticon-qa"></span>
      </mu-icon-button>
    </span>
  </x-header>

    <mu-popover :trigger="trigger3" :open="open3" @close="handleClose3" :anchorOrigin="anchorOrigin">
      <mu-menu>
        <mu-menu-item title="约拍流程" @click="toStep" />

        <mu-menu-item title="常见问题" @click="toQues"/>
      </mu-menu>
    </mu-popover>
  </div>
</template>

<script>
import {XHeader} from 'vux'
export default {
  name: "myXHeader",
  data () {
    return{
      isActive: true,
      open3: false,
      trigger3: null,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'middle'
      },
    }
  },
  mounted () {

      this.trigger3 = this.$refs.button3.$el;

   },
  components: {
    XHeader,
  },
  props:{
    header: {
      type: String,
      required: true,
    },
    showQa : {
      type: Boolean,
      required: true,
    }
  },
  methods : {
    toggle3 () {
      this.open3 = !this.open3;
    },
    handleClose3 () {
      this.open3 = false;
    },
    toStep () {
      this.open3 = false;
      this.$root.$router.push('step');
    },
    toQues () {
      this.open3 = false;
      this.$root.$router.push('ques');
    }
  }
}
</script>

<style lang="scss">
@import "static/px2rem.scss";

.mu-menu{
  .mu-menu-list{
    .mu-menu-item-wrapper{
      font-size: d2rem(10);
      text-align: center;
      height: px2rem(100);
      line-height: px2rem(100);
      margin: 0 px2rem(20);
      .mu-menu-item{

        .mu-menu-item-title{
          margin: 0 auto;
          font-size: d2rem(8);
          text-align: center;
        }
      }
    }
  }
}

.myXHeader{


  .mu-icon-button{
    width: px2rem(80);
    height: px2rem(80);
  }

  .mu-icon-button{
    padding: 0;
  }
  span.qaicon{
    font-size: px2rem(70);
  }

  .vux-header {
    position: relative;
    box-sizing: border-box;
    background-color: #343844;
    height: px2rem(170);
  }
  .vux-header .vux-header-title,.vux-header h1 {
    margin: 0 88px;
    margin-left: 100px;
    line-height: px2rem(170);
    text-align: center;
    height: px2rem(170);
    font-size: d2rem(12);
    font-weight: normal;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
  }
  .vux-header .vux-header-left,.vux-header .vux-header-right {
    position: absolute;
    top: px2rem(55);
    display: block;
    font-size: px2rem(60);
    line-height:px2rem(60);
    color: #fff;
  }
  .vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button {
    color: #fff;
  }
  .vux-header .vux-header-left .left-arrow {
    position: absolute;
    width: px2rem(40);
    height: px2rem(80);
    top: -5px;
    left: -5px;
    color: #fff;
    opacity: 1;
    &:before {
      opacity: 1;
      content: "";
      position: absolute;
      width: px2rem(40);
      height: px2rem(40);
      border: 1px solid #fff !important;
      border-width: 2px 0 0 2px !important;
      transform: rotate(315deg);
      top: px2rem(25);
      left: px2rem(44);
    }
  }
}
</style>
