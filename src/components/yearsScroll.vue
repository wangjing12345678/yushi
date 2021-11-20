<template>
  <div class="page-year" >
    <div class="ka"></div>
    <div class="nav">
      <div class="nav-title box-start" :style="{top:styleTop+'px'}">
        <div class="nav-item" v-for="(item,index) in year" :key="index" @click="action(index)">
          <span class="item-word">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "years",
    components:{
    },
    data(){
      return{
        styleTop:"",
        year:['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021']
      }
    },
    methods:{
      action(index){
        this.styleTop = -98*index+98
        this.$emit('changePage',index)
      }
    }
  }
</script>


<style scoped>
  .nav{
    height: 80vh;
    position: relative;
  }
  .ka{
    position: absolute;
    top: 147px;
    right: 0;
    height: 4px;
    width: 20px;
    background: #fff;
  }
  .nav-title{
    /*background-color: #FFFFFF;*/
    height: auto;
    position: absolute;
    transition: all 0.5s;
    top: 98px;
    color: #fff;
  }
  .nav-title .nav-item{
    width: 100%;
    font-size: 16px;
    color: #333333;
    height: 98px;
    line-height: 98px;
    text-align: center;
    box-sizing: border-box;
    font-weight: bolder;

  }
  .item-word{
    display: block;
    transform: rotate(90deg);
    color: #fff;
  }


</style>
<style>

</style>
