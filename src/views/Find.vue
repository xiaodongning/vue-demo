<template>
  <div>
    <div class="header">
        <XHeader>
            <img slot="overwrite-left" class="topbar_icn" src="../assets/icon/cm2_topbar_icn_mic.png">
            <input type="text" class="search" placeholder="搜索音乐、歌词、电台" >
            <img slot="right" class="topbar_icn topbar_right" src="../assets/icon/cm2_topbar_icn_playing.png">
        </XHeader>
        <tab :line-width="2" v-model="index">
            <tab-item class="vux-center" v-for="(item, index) in tabs" @on-item-click="update" :key="index">{{item}}</tab-item>
        </tab>
    </div>
    <swiper v-model="index" :value="index"  @on-index-change="onSwiperItemIndexChange" ref="swiper" :show-dots="false">
      <swiper-item :key="1" class="find-item">
        <recommend></recommend>
      </swiper-item>
      <swiper-item :key="2" class="find-item">
        <div class="tab-swiper vux-center">Container2</div>
      </swiper-item>
      <swiper-item :key="3" class="find-item">
        <div class="tab-swiper vux-center">Container3</div>
      </swiper-item>
      <swiper-item :key="4" class="find-item">
        <div class="tab-swiper vux-center">Container4</div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem,  Swiper, SwiperItem } from 'vux'
import recommend from '@/components/Recommend'
const tabs = () => ['个性推荐', '歌单', '主播电台', '排行榜']
var el = null;
export default {
  components: {
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    recommend
  },
  methods:{
    update(){

    },
    onSwiperItemIndexChange (index) {
      
    },
  },
  data () {
    return {
      tabs:tabs(),
      index: 0,
    }
  },
  created:function(){
    el = document.getElementsByClassName('vux-swiper-item');
   
  },
  watch:{
    '$store.state.wrapHeight':function(){
        this.$nextTick(()=>{
          this.$refs.swiper.xheight = this.$store.state.wrapHeight+'px';
          this.$store.commit('setWrapHeight', this.$store.state.wrapHeight);
        });
    }
  },
  mounted(){
    this.$nextTick(()=>{
        this.$refs.swiper.xheight = this.$store.state.wrapHeight+'px';
        // console.log(this.$store.state.wrapHeight);
    });
  }
}
</script>

<style scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
}
.find-item{
    overflow: hidden;
}
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
  vertical-align: middle;
  text-indent:24px;
  text-align: left;
}
.search::-webkit-input-placeholder{
    text-indent: 0;
    text-align: center;
    color:#999;
    background:url(../assets/icon/cm2_topbar_icn_search.png) no-repeat 18% center;
}
</style>
