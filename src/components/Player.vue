<template>
    <div class="player">
        <div class="player-bg" :style="{backgroundImage:'url('+audio.picUrl+')'}"></div>
        <div class="player-wrap">
            <audio :src="audio.src" @timeupdate="timeupdate" autoplay id="audioPlay"></audio>
            <div class="player-disc">
                <div class="player-disc-album">
                    <div class="player-disc-img" ref="player" id="player" @click="paused(this)">
                        <img :src="audio.picUrl" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="tool-icon">
            <a class="icon-wrap">
                <span class="item_icon font-icon">&#xe682;</span>
            </a>
            <a class="icon-wrap">
                <span class="item_icon font-icon">&#xe608;</span>
            </a>
            <a class="icon-wrap">
                <span class="item_icon font-icon">&#xe614;</span>
            </a>
            <a class="icon-wrap">
                <span class="item_icon font-icon">&#xe619;</span>
            </a>
        </div>
        <footer>
            <audio id="player" preload="auto"></audio>
            <div id="playerProgress">
                <div class="time currentTime">{{currentTime}}</div>
                <div class="progressbar" id="progressbar">
                    <span class="bar"></span>
                </div>
                <div class="time totalTime">{{totalTime}}</div>
            </div>
            <div id="playerCtrl">
                <div>
                    <a class="button loop"></a>
                </div>
                <div>
                    <a class="button prev"></a>
                </div>
                <div>
                    <a class="button play" @click="toggle" :class="{pause:playing}"></a>
                </div>
                <div>
                    <a class="button next"></a>
                </div>
                <div>
                    <a class="button collect"></a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "player",
  data() {
    return {
      msg: this.$route.params.id,
      currentTime: "00:00",
      totalTime: "00:00"
    };
  },
  watch: {
    "$store.state.audio.src": function(val, oldVal) {
      this.$nextTick(() => {
        let myAudio = document.getElementById("audioPlay");
        let audio = new Audio(val);
        audio.onloadedmetadata = () => {
          this.totalTime = this.parseTime(myAudio.duration);
        };
        audio.src = val;
      });
    }
  },
  methods: {
    toggle: function() {
      let player = document.getElementById("player");
      let myAudio = document.getElementById("audioPlay");
      if (!this.$store.state.playing) {
        player.style.animationPlayState = "running";
        myAudio.play();
      } else {
        player.style.animationPlayState = "paused";
        myAudio.pause();
      }
      this.$store.commit("togglePlaying");
      //   obj.style.animationPlayState = "paused";
    },
    timeupdate: function() {
      let vm = this;
      let myAudio = document.getElementById("audioPlay");
      this.currentTime = this.parseTime(parseInt(myAudio.currentTime));
    },
    parseTime: function(time) {
      var min = String(parseInt(time / 60)),
        sec = String(parseInt(time % 60));
      if (min.length == 1) min = "0" + min;
      if (sec.length == 1) sec = "0" + sec;
      return min + ":" + sec;
    }
  },
  computed: {
    ...mapGetters(["audio", "playing"])
  },
  mounted: function() {},
  updated: function() {
    document.title =
      this.$store.state.audio.name + "-" + this.$store.state.audio.singer;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/css/player.css">
/*icon start*/
</style>
