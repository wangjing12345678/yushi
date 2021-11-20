<template>
  <div class="page-year" >
    <span class="jiexian"></span>
    <swiper class="yearSwuper"
            ref="yearSwuper"
            :slideToClickedSlide="true"
            :options="yearSwuperOption"
            @slideChange ="slideChange"
    >
      <swiper-slide v-for="(item,index) in 11" :key="index">
        <inWrap :activeIndex="index"></inWrap>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
  import inWrap from './inWrap'
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";

  export default {
    name: "years",
    components:{
      swiper,
      swiperSlide,
      inWrap
    },
    data(){
      return{
        yearSwuperOption:{
          direction: 'vertical',
          slidesPerView : 3,
          preventClicks:false,
          // slidesPerGroup : 1,
          // slideToClickedSlide:true,
          preventClicksPropagation : false,
          // slidesPerView: 5,
          centeredSlides: true,
          slideToClickedSlide: true,
          on: {
            click: function () {

            }
          }

        }
      }
    },
    methods:{
      clickItem(){
      },
      slideChange(){
        this.$emit('changePage',this.$refs.yearSwuper.swiper.activeIndex)
      }

    }
  }
</script>


<style scoped>
  .page-year{

  }
  .jiexian{
    width: 20px;
    height: 4px;
    /*background: #fff;*/
    position: absolute;
    top: 80px;
    right: 0;
  }


</style>
<style>
  .page-year .swiper-slide{
    /*width: 100%;*/
    /*height: 100px;*/
    /*height: 80px!important;*/
    /*line-height: 80px;*/
  }
</style>
