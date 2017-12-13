<template>
  <div class="songs">
      <div class="songs__body" v-for="(item,index) in privatecontent" :key="index">
            <div class="songs__img">
                <img v-if="index<2" :src="item.sPicUrl" alt="">
                <img v-else :src="item.picUrl" alt="">
                <i v-if="item.type==19" class="songs__type iconfont">&#xe6c0;</i>
                <i v-else class="songs__type iconfont">&#xe600;</i>
            </div>
            <p class="songs__text">{{item.name}}</p>
      </div>

  </div>
</template>

<script>
import axios from 'axios';
import api from '@/api/common';
const songList = [];
export default {
  name: 'list',
  data () {
    return {
        privatecontent:songList
    }
  },
  created:function(){
      axios.get(this.apiUrl.privatecontent).then((res)=>{
          this.privatecontent = res.data.result;
      }).catch((res)=>{
          console.log(res);
      });
  },
  mounted:function(){

    // var imgDiv = document.getElementsByClassName('remd_img');
    // var i = 0;
    // for(i=0;i<imgDiv.length;i++){
    //     imgDiv[i].style.height = imgDiv[0].offsetWidth+'px';
    // }
  }
}
</script>

<style scoped>
.songs{
    display: flex;
    flex-flow: row wrap;
    align-content:flex-start;
    padding:10px 0;
}
.songs__body{
    width:50%;
    padding-right: 1px;
}
.songs__body:nth-of-type(2){
    padding-left:1px;
    margin-bottom: 10px;
}
.songs__body:nth-of-type(3){
    width: 100%;
}
.songs__img{
    position: relative;
}
.songs__type{
    position: absolute;
    left: 10px;
    top:5px;
    border:1px solid #fff;
    display: inline-block;
    width:26px;
    height:26px;
    line-height: 26px;
    text-align: center;
    border-radius: 50%;
}
.songs__img .iconfont{
    font-family:"iconfont" !important;
    color:#fff;
    font-size:14px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.songs__img img{
    width:100%;
}
.songs__text{
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow: hidden;
    line-height: 1.2;
}
</style>
