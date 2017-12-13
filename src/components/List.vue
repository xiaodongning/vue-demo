<template>
  <div class="remd_songs" style="height:394px;">
      <div class="remd_ul" style="height:394px;">
          <router-link v-for="(item,index) in list" :key="index" class="remd_li" :to="{name:'playList',params:{id:item.id}}">
              <div class="remd_img">
                  <img :src="item.picUrl" alt="">
                  <span class="u-earp remd_num">{{item.trackCount}}万</span>
              </div>
              <p class="remd_text">{{item.name}}</p>
          </router-link>
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
        list:songList
    }
  },
  created:function(){

      axios.get(api.personalized).then((res)=>{
          this.list = res.data.result;
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
.remd_ul{
    display: flex;
    flex-flow: row wrap;
    align-content:flex-start;
    padding:10px 0;
}
.remd_li{
    width: 33.3%;
    padding-right: 2px;
    margin-bottom: 15px;
}
.remd_img{
    position: relative;
}

.remd_img img{
    display: block;
    width:100%;
}
.remd_img:after{
    content:' ';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 20px;
    background-image: linear-gradient(180deg,rgba(0,0,0,.2),transparent);
}
.remd_text{
    display: -webkit-box;
    font-size: 13px;
    line-height: 1.2;
    padding:6px 2px 0 6px;
    overflow: hidden;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
}
</style>
