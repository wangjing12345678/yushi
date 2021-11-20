<template>
  <div>
    <swiper class="swiper"
            ref="mySwiper"
            @slideChangeTransitionStart="slideChangeTransitionStart"
            :options="swiperOption"
            @slideChange="slideChange"
    >
      <swiper-slide >
        <!--<span @click="clickbtn">vvvvv</span>-->
        <div :class="activeIndex == 0?'img-wrap animate__animated animate__pulse':'img-wrap'">
          <img src="../assets/image/home_17.jpg" alt="" class="back">
        </div>
        <audio ref="audio" :src="'https://res.qiaomukeji.com/h5pro/202110/ljbgm/bgm_21.mp3'" id="audio" preload="auto"
               autoplay="autoplay"></audio>
      </swiper-slide>

      <swiper-slide>
        <div  :class="activeIndex == 1?'img-wrap animate__animated animate__pulse':'img-wrap'">
          <img src="../assets/image/home_19.jpg" alt="" class="back">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div  :class="activeIndex == 2?'img-wrap animate__animated animate__pulse':'img-wrap'">
          <img src="../assets/image/home_21.jpg" alt="" class="back">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div  :class="activeIndex == 2?'img-wrap animate__animated animate__pulse':'img-wrap'">
          <img src="../assets/image/home_21.jpg" alt="" class="back">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div  :class="activeIndex == 1?'img-wrap animate__animated animate__pulse':'img-wrap'">
          <img src="../assets/image/home_19.jpg" alt="" class="back">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div  :class="activeIndex == 2?'img-wrap animate__animated animate__pulse':'img-wrap'">
          <img src="../assets/image/home_21.jpg" alt="" class="back">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div  :class="activeIndex == 1?'img-wrap animate__animated animate__pulse':'img-wrap'">
          <img src="../assets/image/home_19.jpg" alt="" class="back">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div  :class="activeIndex == 2?'img-wrap animate__animated animate__pulse':'img-wrap'">
          <img src="../assets/image/home_21.jpg" alt="" class="back">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div  :class="activeIndex == 1?'img-wrap animate__animated animate__pulse':'img-wrap'">
          <img src="../assets/image/home_19.jpg" alt="" class="back">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div  :class="activeIndex == 2?'img-wrap animate__animated animate__pulse':'img-wrap'">
          <img src="../assets/image/home_21.jpg" alt="" class="back">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div  :class="activeIndex == 1?'img-wrap animate__animated animate__pulse':'img-wrap'">
          <img src="../assets/image/home_19.jpg" alt="" class="back">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="img-wrap" style="background: white">
        </div>
        <div class="uploadPage">
          <getPoster @changeDate="changeDate" ref="getPoster" @startPoster="startPoster"></getPoster>
        </div>
      </swiper-slide>
      <div class="year-scroll">
        <yearsScroll @changePage="changePage" ref="yearsScroll"></yearsScroll>
      </div>
      <!--<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>-->
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
    <van-calendar v-model="pickerVisible" @confirm="onConfirm"  :min-date="new Date('2011-10-10')"/>

    <div class="poster-wrap" v-if="showPoster">
      <van-overlay :show="showPoster" >
        <van-icon name="close" class="closeWrap" @click="showPoster = false"/>
        <poster :tempObj="tempObj" ref="posterMain"></poster>
      </van-overlay>

    </div>
  </div>
</template>

<script>
  import yearsScroll from './yearsScroll'
  import poster from './poster'
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";
  import getPoster from './getPoster'
  export default {
    name: "page",
    components: {
      swiper,
      swiperSlide,
      getPoster,
      poster,
      yearsScroll
    },
    data() {
      return {
        showPoster:false,
        tempObj:'',
        activeIndex:'',
        pickerVisible:false,
        swiperOption: {
          direction: 'vertical',
          speed: 300,
          effect: 'fade',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }

        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.audioAutoPlay('audio')

      })

      // this.togglePlay()
    },
    methods: {
      slideChangeTransitionStart(){
        this.activeIndex = this.$refs.mySwiper.swiper.activeIndex
      },
      slideChange(){
        this.activeIndex = this.$refs.mySwiper.swiper.activeIndex
        this.$refs.yearsScroll.action(this.activeIndex)
      },
      clickbtn() {
        this.$refs.audio.play()
        // let player = this.$refs.player
        // player.play()
      },
      audioAutoPlay(id) {
        var audio = document.getElementById(id);
        // audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
          audio.play();
        }, false);
        document.addEventListener("YixinJSBridgeReady", function () {
          audio.play();
        }, false);
      },
      changeDate(){
        this.pickerVisible = true
      },
      formatDate(date) {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      },
      onConfirm(date) {
        this.pickerVisible = false;
        this.$refs.getPoster.missDate = this.formatDate(date)
      },
      startPoster(obj){
        this.tempObj = obj
        this.showPoster = true
        this.$nextTick(() => {
          this.$refs.posterMain.getResult()

        })
      },
      changePage(index){
        this.activeIndex = index
        this.$refs.mySwiper.swiper.slideTo(index, 50, false);//切换到第一个slide，速度为1秒
      }
    }
  }
</script>

<style scoped>
  .swiper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

  }
  .swiper-slide {
    height: 100%;
    width: 100%;
    position: relative;
  }
  .uploadPage{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: #0a9156;
  }
  .img-wrap{
    width: 100%;
    height: 100%;
  }
  .back{
    overflow: hidden;
    transform: rotate(90deg)  translate(calc( 100vh / 2 - 100vw / 2) , calc(100vh / 2 - 100vw / 2));
    width: 100vh;
    height: 100vw;
  }
  .swiper-button-prev{
    top: 5%;
    left: 50%;
    margin: 0;
    margin-left: -10px;
    transform: rotate(90deg);

  }
  .swiper-button-next{
    top: unset;
    bottom: 5%;
    right: 50%;
    margin: 0;
    margin-right: -10px;
    transform: rotate(90deg);
  }
  .poster-wrap{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 99999;
  }
  .closeWrap{
    position: absolute;
    right: 10px;
    top: 30px;
    z-index: 999;
    color: #fff;
    font-size: 0.6rem;
  }
  .swiper-container-vertical > .swiper-pagination-bullets{
    left: 10px;
  }
  .year-scroll{
    position: fixed;
    left: 10px;
    top:30px;
    width: 60px;
    z-index: 999999;
  }

</style>
