<template lang="html">
  <div class="recOrder">
  <flexbox :gutter="0">
      <flexbox-item :span="3/8">
        <div class="flex-rec">
          <mu-flat-button label="综合排序" class="ddod" ref="button" @click="toggle">
            <span class="pticon-drop-down" :class="{reverse:open}"></span>
          </mu-flat-button>
          <mu-popover :trigger="trigger" :open="open" @close="handleClose" :anchorOrigin="anchorOrigin">
            <mu-menu>
              <mu-menu-item title="综合排序" />
              <mu-menu-item title="价格升序" />
              <mu-menu-item title="价格降序" />
            </mu-menu>
          </mu-popover>
        </div>
      </flexbox-item>
      <flexbox-item :span="3/8"><div class="flex-rec"><mu-flat-button label="人气优先">
      </mu-flat-button></div></flexbox-item>
      <flexbox-item :span="2/8">
        <div class="flex-rec shaixuan">
          <mu-flat-button label="筛选" ref="button2" @click="toggle2">
            <span class="pticon-choose"></span>
          </mu-flat-button>
        </div>
        <mu-popover :trigger="trigger2" :open="open2" @close="handleClose2">
          <selectPane></selectPane>
        </mu-popover>
      </flexbox-item>
  </flexbox>
  </div>
</template>

<script>
import {
  Flexbox,
  FlexboxItem
} from 'vux';

import selectPane from './selectPane.vue';

export default {
  name: "recOrder",
  data () {
    return {
      open: false,
      open2: false,
      trigger: null,
      trigger2: null,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'middle'
      },
    }
  },
  mounted () {
   this.trigger = this.$refs.button.$el;
   this.trigger2 = this.$refs.button2.$el;
   },
  components: {
    Flexbox,
    FlexboxItem,
    selectPane,
  },
  methods: {
    toggle () {
      this.open = !this.open;
    },
    toggle2 () {
      this.open2 = !this.open2;
    },
    handleClose (e) {
      this.open = false
    },
    handleClose2 (e) {
      this.open2 = false
    }
  },
}
</script>

<style lang="scss">
@import "static/px2rem.scss";
.recOrder{
  border-bottom: px2rem(2) solid #eceff1;
  position: relative;
  .shaixuan:before{
    content: '';
    width: px2rem(2);
    height: px2rem(72);
    border-left: px2rem(4) solid #eceff1;
    position: absolute;
    bottom: px2rem(30);
  }
}
    .mu-flat-button {
        width: 100%;
        height: px2rem(132);
        .pticon-choose{
          font-size: d2rem(10);

        }
        .mu-flat-button-label{
          font-size: d2rem(10);
        }
    }
    .mu-menu{
      .mu-menu-list{
        .mu-menu-item-wrapper{
          font-size: d2rem(8);
          text-align: center;
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
    .ddod {
        position: relative;
        font-size: d2rem(10);
        .mu-flat-button-label {
          font-size: d2rem(10);
        }
        .pticon-drop-down {
            position: absolute;
            right: px2rem(40);
            font-size: d2rem(10);
        }
    }


</style>
