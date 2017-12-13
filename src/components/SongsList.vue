<template>
  <div style="background:#fbfcfe;">
    <div class="pylst_btn">
        <span class="font-icon icon-play">&#xe624;</span>播放全部<small>共({{songsdata.length}})首</small>
    </div>
    <ol class="u_songs">
        <li class="u_song" v-for="(item,index) in songsdata" :key="index">
            <a class="u_song_link"  @click="playAudio(item)">
                <div class="song_fl">{{index+1}}</div>
                <div class="song_fr">
                    <div class="song_item_fl">
                        <div class="song_name">{{item.name}}</div>
                        <div class="song_singer f-single">{{item.ar[0].name}}-{{item.al.name}}</div>
                </div>
                    <div class="song_item_fr">
                        <span class="more font-icon">&#xe7d6;</span>
                    </div>
                </div>
            </a>
        </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: this.$route.params.id
    };
  },
  methods: {
    playAudio(data) {
      let audio = {};
      audio.id = data.id;
      audio.name = data.name;
      audio.singer = data.ar[0].name;
      audio.picUrl = data.al.picUrl;
      this.$store.commit('addSongList',audio);
      this.$store.dispatch('getSong',audio.id);
      this.$store.commit('changePlayer',true);
    //   this.$router.push({
    //     path: "/player/" + data.id
    //   });
    }
  },
  created: function() {},
  props: ["songsdata"]

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pylst_btn {
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  position: relative;
}
.pylst_btn::after {
  content: " ";
  margin-left: 40px;
  height: 1px;
  background: #eee;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.pylst_btn small {
  color: #666;
  margin-left: 5px;
}
.icon-play {
  color: #333;
  font-size: 18px;
  font-weight: 600;
  margin: 0 10px;
  vertical-align: top;
}
.song_fl {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 40px;
  font-size: 17px;
  color: #999;
}
.u_song {
  display: flex;
}
.u_song_link {
  display: flex;
  width: 100%;
}
.song_fr {
  display: flex;
  flex: 1 1 auto;
  border-bottom: 1px solid #eee;
}
.song_item_fl {
  flex: 1 1 auto;
  padding: 5px 0;
  width: 0;
}
.song_name {
  font-size: 16px;
}
.song_singer {
  color: #999;
}
.song_item_fr {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.more {
  font-size: 22px;
  color: #999;
  font-weight: bold;
  margin-right: 10px;
}
</style>
