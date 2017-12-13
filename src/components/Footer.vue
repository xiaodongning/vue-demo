<template>
  <div class="footer">
    <tabbar>
      <tabbar-item>
        <img slot="icon" class="tab-item-icon" src="../assets/icon/btm_icn_discovery.png">
        <span slot="label">发现音乐</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" class="tab-item-icon" src="../assets/icon/btm_icn_discovery.png">
        <span slot="label">我的音乐</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" class="tab-item-icon" src="../assets/icon/btm_icn_discovery.png">
        <span slot="label">朋 友</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" class="tab-item-icon" src="../assets/icon/btm_icn_discovery.png">
        <span slot="label">帐 号</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected:'tab-container1'
    }
  },
  methods:{
    handleChange(index){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabar{
  display: flex;
  text-align: center;
  position: absolute;
  left:0;
  bottom:0;
  right:0;
  background: #26A2FF;
}
.tabar .tab-item{
  display: block;
  flex:1;
  text-decoration: none;
  color:#fff;
  padding:7px 0;
}
.tab-item-icon{
  width:24px;
  height:24px;
  margin:0 auto 5px;
}
.tab-item-cion img{
  width:100%;
  height:100%;
  display: block;
}
.tab-item-label{
  font-size: 12px;
  line-height: 1;
}
.footer{
  background:#26A2FF
}
.router-link-active{
  background:#1D8CE0;
  color:#fff;
}
</style>
