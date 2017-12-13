<template>
    <div class="player">
        <div class="player-bg" :style="{backgroundImage:'url('+audio.picUrl+')'}"></div>
        <div class="player-wrap">
            <audio :src="audio.src"></audio>
            <div class="player-disc">
                <div class="player-disc-album">
                    <div class="player-disc-img" ref="player" @click="paused(this)">
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
                <div class="time currentTime">00:00</div>
                <div class="progressbar" id="progressbar">
                    <span class="bar"></span>
                </div>
                <div class="time totalTime">00:00</div>
            </div>
            <div id="playerCtrl">
                <div>
                    <a class="button loop"></a>
                </div>
                <div>
                    <a class="button prev"></a>
                </div>
                <div>
                    <a class="button play"></a>
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
import {mapGetters} from 'vuex';
export default {
  name: "player",
  data() {
    return {
      msg: this.$route.params.id
    };
  },
  methods: {
    paused: function(obj) {
      console.log(obj);
      if (this.$refs.player.style.animationPlayState == "paused") {
        this.$refs.player.style.animationPlayState = "running";
      } else {
        this.$refs.player.style.animationPlayState = "paused";
      }

      //   obj.style.animationPlayState = "paused";
    }
  },
  computed: {
    ...mapGetters([
        'audio'
    ])
  },
  created: function() {
    document.title = '';
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/css/player.css">
/*icon start*/

</style>
