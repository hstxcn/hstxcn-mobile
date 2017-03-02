<template>
<div class="stepFlow">
  <myXHeader header="约拍流程" :showQa="showQa"></myXHeader>
  <mu-stepper :activeStep="activeStep" orientation="vertical">
    <mu-step>
      <mu-step-label>
        进入友拍平台
      </mu-step-label>
      <mu-step-content>
        <p>
          扫码或点击链接进入友拍，分类浏览照片。
        </p>
        <mu-raised-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
      </mu-step-content>
    </mu-step>
    <mu-step>
      <mu-step-label>
        寻找摄影师
      </mu-step-label>
      <mu-step-content>
        <p>
          通过浏览照片及摄影师推荐，从价位，风格，学校等方面选择合适自己的摄影师。
        </p>
        <mu-raised-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
        <mu-raised-button label="上一步" class="demo-step-button" @click="handlePrev"/>
      </mu-step-content>
    </mu-step>
    <mu-step>
      <mu-step-label>
        约拍
      </mu-step-label>
      <mu-step-content>
        <p>
          进入摄影师个人主页，点击私洽按钮，根据信息自行和摄影师取得联系。
        </p>
        <mu-raised-button label="完成" class="demo-step-button" @click="handleNext" primary/>
        <mu-raised-button label="上一步" class="demo-step-button" @click="handlePrev"/>
      </mu-step-content>
    </mu-step>
    <mu-step>
      <mu-step-label>
        反馈和建议
      </mu-step-label>
      <mu-step-content>
        <p>
          欢迎将您的约拍体验连同您对友拍的建议或意见发送到友拍平台微信公众号。
          我们将第一时间给您反馈，谢谢您对友拍的支持。
        </p>

        <mu-raised-button label="完成" class="demo-step-button" @click="handleNext" primary/>
        <mu-raised-button label="上一步" class="demo-step-button" @click="handlePrev"/>
      </mu-step-content>
    </mu-step>
  </mu-stepper>
  <div v-if="finished">
    <div class="finishedBtn">
    <mu-raised-button label="再看一遍" class="demo-step-button" @click="reset" fullWidth/>
    </div>
    <div class="finishedBtn2">
    <router-link to="bonus"><mu-raised-button label="打赏我们" class="demo-step-button" @click="reset" secondary fullWidth/>
      </router-link>
    </div>
  </div>
  <div class="qrcode"><img :src="qrcode" alt=""></div>
</div>
</template>

<script>
import myXHeader from "../myXHeader.vue"
import qrcode from './logo.png'
export default {
  name: 'stepFlow',
  data () {
    return {
      qrcode,
      showQa : false,
      activeStep: 0,
    }
  },
  computed: {
    finished () {
      return this.activeStep > 2
    }
  },
  methods: {
    handleNext () {
      this.activeStep++
    },
    handlePrev () {
      this.activeStep--
    },
    reset () {
      this.activeStep = 0
    }
  },
  components: {
    myXHeader,
  }
}
</script>

<style lang="scss">
@import "static/px2rem.scss";
.mu-stepper{
  margin: px2rem(48);
}
.mu-step{

  margin-left: - px2rem(24);
  .mu-stepper-vertical & {
    margin-top: - px2rem(56);
  }
}

.mu-step-connector{

  .mu-stepper-vertical &{
    margin-left: px2rem(100);
  }
}

.mu-step-content{
  margin-top: - px2rem(56);
  margin-left: px2rem(100);
  padding-left: px2rem(74);
  padding-right: px2rem(64);
}
.mu-step-content-inner{
  p{
    font-size: d2rem(8);
    margin-bottom: px2rem(30);
  }
}

.mu-step-connector-line{
  margin-left: - px2rem(24);
  border-top-width: px2rem(2);
  .mu-stepper-vertical & {
    border-top: none;
    border-left-style: solid;
    border-left-width: px2rem(2);
    min-height: px2rem(48);
  }
}
.mu-step-label{
  height: px2rem(288);
  display: flex;
  align-items: center;
  font-size: px2rem(48);
  padding-left: px2rem(48);
  padding-right: px2rem(48);
  .mu-stepper-vertical & {
    height: px2rem(256);
  }
  &.active {
    font-weight: 500;
  }
}

.mu-step-label-icon-container{
  display: flex;
  align-items: center;
  margin-right: px2rem(32);
  width: px2rem(96);
}

.mu-step-label-icon {
  display: block;
  font-size: px2rem(96);
  width: px2rem(96);
  height: px2rem(96);
}

.mu-step-label-circle{
  width: px2rem(80);
  height: px2rem(80);
  font-size: px2rem(48);
  line-height: px2rem(80);
}
.qrcode{
  width: px2rem(470);
  margin: px2rem(60) auto;
  img{
    width: 100%;
  }
}
.finishedBtn{
  width: 40%;
  margin-left: 10%;
  display: inline-block;
}
.finishedBtn2{
  width: 40%;
  display: inline-block;
}
.mu-raised-button {
  height: px2rem(72);
  line-height: px2rem(72);
  .mu-raised-button-label{
    font-size: d2rem(7);
  }
}
.mu-menu-item-title{
  font-size: d2rem(8);
}
</style>
