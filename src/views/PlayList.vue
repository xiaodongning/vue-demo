<template>
    <div class="palylist">
        <div>
            <x-dialog v-model="show" hide-on-blur dialog-transition="vux-fade-enter" class="dialog-photo" :dialog-style="{'max-width': '100%', width: '100%', height: '100%', 'background-color': 'transparent'}">
                <div class="pylst_bg" :style="{backgroundImage:'url('+coverImgUrl+')'}"></div>
                <div class="img-box">
                    <img :src="coverImgUrl" class="albums">
                    <h3 class="albums_title">{{name}}</h3>
                    <div class="albums_desc">
                        <pre>{{desc}}</pre>
                        <div class="tag_wrap">
                            标签：
                            <span>华语</span>
                            <span>另类/独立</span>
                            <span>摇滚</span>
                        </div>
                    </div>
                </div>
                <div class="btn_layout">
                    <button class="btn" type="button">保存封面</button>
                </div>
                <div class="close" @click="show=false">
                    <span class="font-icon vux-close">&#xe625;</span>
                </div>
            </x-dialog>
        </div>
        <section class="pylst_header">
            <div class="pylst_bg" :style="{backgroundImage:'url('+coverImgUrl+')'}"></div>
            <div class="pylst_wrap">
                <div class="pylst_fl" @click="doShowDialog">
                    <img :src="coverImgUrl" alt="播单">
                    <span class="pylst_icon">歌单</span>
                    <i class="u-earp remd_num">88.3万</i>
                    <i class="font-icon icon-point">&#xe639;</i>
                </div>
                <div class="pylst_fr">
                    <h2 class="pylst_title f-thide">{{name}}</h2>
                    <a class="pylst_auth f-thide" href="">
                        <div class="u-avatar">
                            <img :src="avatar" alt="">
                            <span class="ava-icon font-icon">&#xe607;</span>
                        </div>
                        昵称
                    </a>
                </div>
            </div>
            <div class="pylst_tool">
                <a class="tool_item">
                    <span class="item_icon font-icon">&#xe603;</span>
                    <span class="item_text">12345</span>
                </a>
                <a class="tool_item">
                    <span class="item_icon font-icon">&#xe614;</span>
                    <span class="item_text">12345</span>
                </a>
                <a class="tool_item">
                    <span class="item_icon font-icon">&#xe648;</span>
                    <span class="item_text">12345</span>
                </a>
                <a class="tool_item">
                    <span class="item_icon font-icon">&#xe608;</span>
                    <span class="item_text">下载</span>
                </a>
            </div>
        </section>
        <div class="pylst_songs">
            <songs :songsdata="playListSongs" v-if="flag"></songs>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import songs from "@/components/SongsList";
import router from "@/router/index";
import { XDialog } from "vux";
export default {
  name: "hello",
  data() {
    return {
      flag: false,
      show: false,
      desc:
        "精选国内30首前奏吉他很抓耳的摇滚\n\n歌曲排序说明——\n按照前奏中的吉他的风格排序\n以第18首为分界线\n1-17的前奏以分解和弦为主，19-30的前奏以扫弦音色引入\n\n这两部分歌曲都是：排在前面的是前奏为吉他原声的，渐渐过渡到后面加上效果器的\n所以个人觉得此单不适合随机播放\n\n选曲无法避免带有个人喜好因素了，望理解\n希望大家能通过这一首歌，喜欢上这个乐队or音乐人",
      msg: this.$route.params.id,
      coverImgUrl: "",
      name: "",
      playListSongs: null,
      avatar : ""
    };
  },
  methods: {
    doShowDialog() {
      this.show = true;
    }
  },
  created: function() {
    axios
      .get(this.apiUrl.playlistdetail + "?id=" + this.$route.params.id)
      .then(res => {
        this.coverImgUrl = res.data.playlist.coverImgUrl;
        this.name = res.data.playlist.name;
        this.playListSongs = res.data.playlist.tracks;
        this.flag = true;
        this.avatar = res.data.playlist.creator.avatarUrl
      })
      .catch(res => {
        console.log(res);
      });
  },
  components: {
    songs,
    XDialog
  },
  beforeRouteLeave: (to, from, next) => {
    let vshow = router.app.$options.store.state.showPlayer;
    if (vshow) {
      router.app.$options.store.commit("changePlayer", false);
      next(false);
    } else {
      next();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/css/playlist.css">
.pylst_btn {
  font-size: 16px;
  height: 40px;
}
</style>
