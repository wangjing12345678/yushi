<template>
  <div class="upload-page">
    <div id="handlePage" >
      <div class="handlePage-title">宇视十周年生日快乐</div>
      <div>
        <van-field v-model="name" label="姓名" placeholder="请输入姓名" />
        <van-field v-model="missDate" label="相识日期" placeholder="请选择相识日期" readonly  @click="changDate"/>
      </div>
      <div class="chooseImg">
        <img src="../assets/image/camera.png" alt="" @click="selectImage" v-if="!imgSrc">
        <img :src="imgSrc" alt="" v-else>
      </div>
      <div @click="getCanvas"  class="get-btn">点击生成</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "getPoster",
    data() {
      return {
        name: '',
        imgSrc: '',
        imgUrl: '',
        missDate: '',
        pickerVisible: false
      }
    },
    mounted() {
    },
    methods: {
      changeImg(e) {
        let _this = this
        var files = e.target.files[0]
        if (!e || !window.FileReader) return  // 判断是否支持FileReader
        let reader = new FileReader()
        reader.readAsDataURL(files) // 文件转换
        reader.onloadend = function () {
          _this.imgSrc = this.result
          _this.textHide = false;
        }
      },
      getCanvas() {
        console.log(this.name)
        console.log(this.missDate)
        let day1 = new Date(this.missDate);
        let day2 = new Date();
        let tempObj = {
          imgUrl:'',
          name:this.name,
          imgSrc:this.imgSrc,
          days:Math.floor((day2 - day1) / (1000 * 60 * 60 * 24))

        }
        this.$emit('startPoster',tempObj)


      },

      changDate() {
        this.$emit('changeDate')
      },
      selectImage() {
        var fileInput = document.getElementById("fileInput");
        if (fileInput) {
          fileInput.parentNode.removeChild(fileInput);
          fileInput = null;
        }
        if (fileInput == null) {
          fileInput = document.createElement("input");
          fileInput.id = "fileInput";
          fileInput.type = "file";
          fileInput.accept = "image/*";
          fileInput.style.height = "0px";
          fileInput.style.display = "block";
          fileInput.style.overflow = "hidden";
          document.body.insertBefore(fileInput, document.body.firstChild);
          // if (navigator.userAgent.match(/Android/i)) {
          //     fileInput.addEventListener('change', tmpSelectFile, false);
          // } else {
          fileInput.addEventListener('change', this.selectFileImage, false);
          // }
        }
        setTimeout(function () {
          fileInput.click()
        }, 100);
      },
      selectFileImage(e){
        let _this = this
        var files = e.target.files[0]
        if (!e || !window.FileReader) return  // 判断是否支持FileReader
        let reader = new FileReader()
        reader.readAsDataURL(files) // 文件转换
        reader.onloadend = function () {
          _this.imgSrc = this.result
          _this.textHide = false;
        }

      }
    }
  }
</script>

<style scoped>
  .upload-page {
    font-size: 0.16rem;
    background: #0a9156;

  }
  #handlePage{
    padding-top: 100px;
    /*background: #0a9156;*/
    color: #fff;
  }

  .handlePage-title{
    text-align: center;
    font-size: 0.46rem;
    margin-bottom: 0.5rem;
  }


  span {
    font-size: 0.36rem;
  }

  .datePicker {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

  }

  .chooseImg {
    width: 120px;
    height: 120px;
    margin: 0.2rem auto;
  }

  .chooseImg img {
    width: 120px;
    height: 120px;
  }

  .get-btn{
    width: 150px;
    height: 40px;
    line-height: 40px;
    border-radius: 40px;
    color: #fff;
    font-size: 0.3rem;
    border: 0.08rem solid #fff;
    text-align: center;
    margin: 40px auto;
  }


</style>
<style>
  #handlePage .van-cell{
    background: rgba(0,0,0,0);
    padding-left: 23%;
  }
  #handlePage .van-field__label,.van-field__control{
    color: #fff;
  }
</style>
