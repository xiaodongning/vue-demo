<template>
  <div class="main">
    <router-view class="main-content"></router-view>
    <tabbar @on-index-change="onIndexChange">
      <tabbar-item selected link="/">
        <img slot="icon" class="tab-item-icon" src="../assets/icon/btm_icn_discovery.png">
        <img slot="icon-active" class="tab-item-icon" src="../assets/icon/btm_icn_discovery_prs.png">
        <span slot="label" class="tab-lable">发现音乐</span>
      </tabbar-item>
      <tabbar-item link="music">
        <img slot="icon" class="tab-item-icon" src="../assets/icon/btm_icn_music.png">
        <img slot="icon-active" class="tab-item-icon" src="../assets/icon/btm_icn_music_prs.png">
        <span slot="label" class="tab-lable">我的音乐</span>
      </tabbar-item>
      <tabbar-item link="friend">
        <img slot="icon" class="tab-item-icon" src="../assets/icon/btm_icn_friend.png">
        <img slot="icon-active" class="tab-item-icon" src="../assets/icon/btm_icn_friend_prs.png">
        <span slot="label" class="tab-lable">朋 友</span>
      </tabbar-item>
      <tabbar-item link="account">
        <img slot="icon" class="tab-item-icon" src="../assets/icon/btm_icn_account.png">
        <img slot="icon-active" class="tab-item-icon" src="../assets/icon/btm_icn_account_prs.png">
        <span slot="label" class="tab-lable">帐 号</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar,TabbarItem  } from 'vux'
export default {
  name: 'main',
  data() {
    return {
      selected:0,
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    onIndexChange (newIndex, oldIndex) {
      this.selected = newIndex;
    }
  },
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content{
  overflow: hidden;
  padding-top:90px;
  padding-bottom: 53px;
}
.weui-tabbar{
  position: fixed;
  background: url(../assets/images/btm_bg.png) repeat-x 0 0;
}
.weui-bar__item_on .tab-lable{
  color:#fff;
}

</style>
