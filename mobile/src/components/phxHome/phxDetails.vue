<template lang="html">
  <div class="phxDetails">
    <myXHeader header="摄影师详情" :showQa="showQa"></myXHeader>
    <p class="title1">摄影师姓名：</p>
    <p class="name">{{name}}</p>
    <p class="title1">摄影师编号：</p>
    <p class="titleNum">{{number}}</p>
    <p class="scan">扫描下方二维码</p>
    <p>关注友拍微信公众号</p>
    <p class="way"><span class="em">回复</span>摄影师姓名或编号</p>
    <p><span class="em">获得</span>该摄影师的联系方式</p>
    <div class="qrcode"><img :src="qrcode" alt=""></div>
    <mu-dialog :open="dialog" title="私洽提示" @close="close" :titleClass="myDialog">
    为保护摄影师个人隐私，摄影师联系方式详询友拍微信公众号。
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>
import myXHeader from '../myXHeader.vue'
import qrcode from './logo.png'
export default {
  data() {
    return {
      showQa: true,
      qrcode,
      dialog: true,
      myDialog: 'my-mu-dialog',
      name: '',
      number: 0,
    }
  },
  components: {
    myXHeader,
  },
  methods: {
    open() {
      this.dialog = true
    },
    close() {
      this.dialog = false
    },
    fetchData(){
      let phxUrl = '/api/photographer/'+this.$route.params.phxId;
      this.$http.get(phxUrl).then((res)=>{
        this.number=res.data.number;
        this.name=res.data.name;
      })
    },
  },
  created () {
    this.fetchData();
  },
  befor
}
</script>

<style lang="scss">
@import "static/px2rem.scss";
.my-mu-dialog {
    font-size: d2rem(12);
    text-align: center;
}
.mu-dialog-body  {
    font-size: d2rem(8);
    word-spacing: d2rem(2);
    letter-spacing: d2rem(1);
    color: #343844;
}
.mu-flat-button-label{
  font-size: d2rem(8);
  word-spacing: d2rem(2);
  letter-spacing: d2rem(1);
}
.phxDetails {



    p {
        font-size: d2rem(10);
        letter-spacing: d2rem(2);
        text-align: center;
        color: #343844;
        span.em {
            font-size: d2rem(12);
            font-weight: bold;
        }
    }
    p.title1 {
        margin-top: px2rem(112);
        font-size: d2rem(9);
    }
    p.titleNum {
        margin-top: px2rem(24);
        font-size: d2rem(30);
        color: #04c3c2;
    }
    p.scan {
        margin-top: px2rem(84);

    }
    p.way {
        margin-top: px2rem(84);
    }
    p.name{
      margin-top: px2rem(50);
      font-size: d2rem(10);
    }
    .qrcode {
        width: px2rem(470);
        margin: px2rem(135) auto 0;
        img {
            width: 100%;
        }
    }

}
</style>
