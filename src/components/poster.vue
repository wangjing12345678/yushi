<template>
  <div class="poster-in">
    <div ref="imgContainer" id="imgContainer">
      <div class="imgContainer-title">宇视十周年生日快乐</div>
      <div class="imgContainer-title">十年有你，少年依旧</div>
      <img :src="imgObj.imgSrc" alt="" class="imgContainer-img">
      <div class="miss-word">
        <div>认识宇视 {{ imgObj.days }}天</div>
        <div>宇视十周年 生日快乐</div>
        <div class="miss-name">{{ imgObj.name }}</div>
      </div>
      <!--<div>-->
      <!--<span>姓名</span>-->
      <!--<input type="text" v-model="name">-->
      <!--</div>-->
      <!--<div>-->
      <!--<span @click="changDate">相识日期</span>-->
      <!--<input type="text" v-model="missDate">-->
      <!--</div>-->
      <!--<div class="chooseImg">-->
      <!--<img src="../assets/image/camera.png" alt="" @click="selectImage" v-if="!imgSrc">-->
      <!--<img :src="imgSrc" alt="" v-else>-->
      <!--</div>-->
    </div>
    <div  class="get-btn">长安保存</div>
    <div class="result" v-if="imgObj.imgUrl" >
      <img :src="imgObj.imgUrl" alt="" style="opacity: 0" >
    </div>

  </div>
</template>

<script>
  import html2canvas from 'html2canvas';
  export default {
    name: "poster",
    props:['tempObj'],
    data(){
      return{
        imgObj:this.tempObj
      }
    },
    methods:{
      getResult(){
        html2canvas(this.$refs.imgContainer, {
          // 转换为图片,
          taintTest: false,
          allowTaint: false,
          scale:window.devicePixelRatio,
          useCORS: true // 解决资源跨域问题
        }).then(canvas => {
          console.log(canvas, 'canvas');
          let dataURL = canvas.toDataURL('image/png',1.0);
          this.imgObj.imgUrl = dataURL;
        });
      }
    }
  }
</script>

<style scoped>
  .poster-in{
    position: absolute;
  }
  .imgContainer-title{
    text-align: center;
    font-size: 0.3rem;
    margin-bottom: 10px;
  }
  #imgContainer{
    position: fixed;
    top: 40px;
    bottom: 40px;
    left: 0;
    right: 0;
    padding: 80px 0;
    /*height: 100%;*/
    width: 100%;
    background: red;
  }
  .result{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .result img{
    width: 100%;
  }
  .imgContainer-img{
    width: 300px;
    height: 200px;
    display: block;
    margin: 0 auto;
  }
  .miss-word{
    width: 80%;
    margin: 0 auto;
    font-size: 0.3rem;
  }
  .miss-name{
    text-align: right;
    margin-top: 10px;
    font-size: 0.4rem;
  }
  .get-btn{
    position: fixed;
  ;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 80px;
    width: 150px;
    height: 40px;
    line-height: 40px;
    border-radius: 40px;
    color: #fff;
    font-size: 0.3rem;
    border: 0.08rem solid #fff;
    text-align: center;
  }

</style>
