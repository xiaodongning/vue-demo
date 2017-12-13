<template>
  <div class="recommend" id="find">
    <div>
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
            <swiper-slide v-for="(item, index) in imglist" :key="index"><img :src="item.pic" class="banner-item" style="width: 100%;"></swiper-slide>
            <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        </swiper>
    </div>
    <grid :rows="3">
      <grid-item link="/component/cell">
        <div class="radius">
            <img src="../assets/images/disc_topbtn_fm.png">
        </div>
        <p class="label">
            <span>私人FM</span>
        </p>
      </grid-item>
      <grid-item link="/">
        <div class="radius number">
            <img src="../assets/images/disc_topbtn_daily.png">
            <small>31</small>
        </div>
        <p class="label">
            <span>每日歌曲推荐</span>
        </p>
      </grid-item>
      <grid-item link="">
        <div class="radius">
            <img src="../assets/images/disc_topbtn_rank.png">
        </div>
        <p class="label">
            <span>云音乐热歌榜</span>
        </p>
      </grid-item>
    </grid>
    <div class="song-list">
        <h3 class="sub-title">推荐歌单</h3>
        <recommendSong></recommendSong>
    </div>
    <div class="song-list">
        <h3 class="sub-title">独家放送</h3>
        <privateSong></privateSong>
    </div>
  </div>
</template>

<script>
require('swiper/dist/css/swiper.css')
import axios from 'axios';
import api from '@/api/common'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Grid, GridItem } from 'vux'
import {mapActions,mapState,mapMutations} from 'vuex'
import recommendSong from '@/components/List'
import privateSong from '@/components/Private'

const imgList = [
'static/banner1.jpg', 
'static/banner2.jpg', 
'static/banner3.jpg', 
'static/banner4.jpg'
]

export default {
  name: 'recommend',
  data () {
    var that = this;
    return {
        notNextTick: true,
        swiperOption: {
          pagination: '.swiper-pagination',
          passiveListeners : false,
          touchReleaseOnEdges:false,
          autoplay: 2400,
          loop: false,
          nested:true,
          observer:true,
          observeParents:true,
          updateOnImagesReady : true,
          onImagesReady(swiper){
            
            that.$store.commit('setHeight', swiper.height);
        
            var findDom = document.getElementById('find');
            var imgItem = document.getElementsByClassName('banner-item');
            setTimeout(()=>{
                console.log(swiper);
                console.log(findDom.scrollHeight);
                that.$store.commit('setWrapHeight', findDom.scrollHeight);
            },100);
            
         
          }
        },
        imglist:imgList,
        index: 1,
    }
  },

  created:function(){
      axios.get(api.banner).then((res)=>{
          this.imglist = res.data.banners;
      }).catch((res)=>{
          console.log(res);
      });

  },
  components:{
      swiper,
      swiperSlide,
      Grid,
      GridItem,
      recommendSong,
      privateSong
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner-item{
    display: block;
}
.radius{
    width:50%;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #d43c33;
}
.number{
    position: relative;
}
.number small{
    position: absolute;
    color:#d43c33;
    top:38%;
    left:38%;
}
.weui-grids:before,.weui-grid:before{
    border: 0;
}
.weui-grid{
    text-align: center;
}
.weui-grids img{
    width:100%;
    vertical-align: middle;
}
.label span{
    font-size:12px;
}
.song-list{
    padding:10px 0 0;
}
.sub-title{
    font-weight: normal;
    padding-left: 9px;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    position: relative;
}
.sub-title::before{
    content:" ";
    width:2px;
    height:16px;
    background:#d43c33;
    position: absolute;
    left:0;
    top:50%;
    margin-top: -8px;
}
.sub-title:after{
    content:' ';
    width:9px;
    height:100%;
    display: block;
    position: absolute;
    left:82px;
    top:0;
    background:url(../assets/icon/discover_icn_more.png) no-repeat 0 center;
    background-size:100% auto;
}
</style>
