<template lang="html">
  <div class="selectPane">
    <div class="pane">
    <divider>全部类目</divider>
    <checker  v-model="all"
     default-item-class="all-item"
     selected-item-class="all-item-selected"
     disabled-item-class="all-item-disabled"
     type="checkbox">
          <checker-item v-for="tag in allTag" :value="tag">{{tag}}</checker-item>
    </checker>
    </div>
    <div class="pane">
    <divider>学校选择</divider>
    <checker  v-model="school"
     default-item-class="all-item"
     selected-item-class="all-item-selected"
     disabled-item-class="all-item-disabled"
     type="checkbox">
          <checker-item v-for="tag in schoolTag" :value="tag">{{tag}}</checker-item>
    </checker>
    </div>

    <div class="pane">
    <divider>主题</divider>
    <checker  v-model="themes"
     default-item-class="all-item"
     selected-item-class="all-item-selected"
     disabled-item-class="all-item-disabled"
     type="checkbox">
          <checker-item v-for="tag in themesTag" :value="tag">{{tag}}</checker-item>
    </checker>
    </div>

    <div class="pane">
    <divider>风格</divider>
    <checker  v-model="style"
     default-item-class="all-item"
     selected-item-class="all-item-selected"
     disabled-item-class="all-item-disabled"
     type="checkbox">
          <checker-item v-for="tag in styleTag" :value="tag">{{tag}}</checker-item>
    </checker>
    </div>

  </div>
</template>

<script>
import {Divider,Checker,CheckerItem} from 'vux';

export default {
  name: "selectPane",
  components: {
    Divider,
    Checker,
    CheckerItem,
  },
  data () {
    let allTag = ['航拍&360','单人','多人','团体'];
    let all= new Array();
    let schoolTag = ['华科','武大','其他'];
    let school = new Array();
    let themesTag = ['毕业季','闺蜜','街拍','情侣','私房','手绘'];
    let themes = new Array();
    let styleTag = ['毕业季','闺蜜','街拍','情侣','私房','手绘'];
    let style = new Array();
    return {
      allTag,
      all,
      schoolTag,
      school,
      themesTag,
      themes,
      styleTag,
      style,
    }
  }
}
</script>

<style lang="scss">@import "static/px2rem.scss";
.selectPane {
    font-size: d2rem(10);
    margin-top: px2rem(42);
    .all-item {
        background-color: #fff;
        color: #343844;
        font-size: d2rem(8);
        // padding: 5px 10px;
        // margin-right: 10px;
        // line-height: 18px;
        // border-radius: 15px;
        width: px2rem(230);
        height: px2rem(80);
        border-radius: px2rem(40);
        line-height: px2rem(80);
        margin: px2rem(25) px2rem(20);
        text-align: center;
        border: 1px solid #eceff1;
    }
    .all-item-selected {
        background-color: #04c3c2;
        color: #fff;
    }
    .all-item-disabled {
        color: #999;
    }
}
</style>
