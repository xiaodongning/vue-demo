<template>
  <div>
    <XHeader class="header">
      <img slot="overwrite-left" class="topbar_icn" src="../assets/icon/cm2_topbar_icn_mic.png">
      <input type="text" class="search" placeholder="搜索音乐、歌词、电台" >
      <img slot="right" class="topbar_icn topbar_right" src="../assets/icon/cm2_topbar_icn_playing.png">
    </XHeader>
    <tab :line-width="2" v-model="index">
      <tab-item class="vux-center" v-for="(item, index) in tabs" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item :key="1">
        <div class="tab-swiper vux-center">Container1</div>
      </swiper-item>
      <swiper-item :key="2">
        <div class="tab-swiper vux-center">Container2</div>
      </swiper-item>
      <swiper-item :key="3">
        <div class="tab-swiper vux-center">Container3</div>
      </swiper-item>
      <swiper-item :key="4">
        <div class="tab-swiper vux-center">Container4</div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem,  Swiper, SwiperItem  } from 'vux'
const tabs = () => ['个性推荐', '歌单', '主播电台', '排行榜']
export default {
  components: {
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      tabs:tabs(),
      index: 0,
    }
  }
}
</script>

<style>
.topbar_icn{
   position:relative;
   top:-5px;
   left:-3px;
   width:30px;
}
.topbar_right{
  left: inherit;;
  right:-3px;
}
.search{
  line-height: 28px;
  border:none;
  border-radius: 20px;
  width:100%;
  text-align: center;
  vertical-align: middle;
}
.search::-webkit-input-placeholder{
  color:#999;
  background:url(../assets/icon/cm2_topbar_icn_search.png) no-repeat 18% center;
}
</style>
