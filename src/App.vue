<template>
    <div id="app">
        <router-view v-show="!showPlayer"></router-view>
        <player class="player-view" v-show="showPlayer"></player>
    </div>
</template>

<script>
import player from './components/Player';
import {mapGetters} from 'vuex';
import router from './router/index'
// router.beforeEach((to,from,next) => {
//     let vshow = router.app.$options.store.state.showPlayer;
//     if(vshow){
//         router.app.$options.store.commit('changePlayer',false);
//     }
//     console.log(vshow);
//     next();
// });
export default {
    name: 'app',
    computed:{
        ...mapGetters([
            'showPlayer'
        ])
    },
    components:{
        player
    }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body {
    background-color: #fbf9fe;
    color: #333;
    font-family: "Microsoft YaHei";
    font-size: 13px;
}
</style>
<style>
* {
    box-sizing: border-box
}

a:link,
a:visited,
a:active {
    color: #333;
}

i {
    font-style: normal;
}

h2 {
    font-weight: 400;
}

.f-brk {
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal;
}

.f-thide {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.f-single {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
}
.text_hidden {
    overflow: hidden;
    text-overflow: ellipsis;
}

.font-icon {
    font-family: 'iconfont';
    color: #fff;
}

.vux-header .vux-header-title {
    margin: 0 66px;
}

.remd_num {
    position: absolute;
    right: 5px;
    top: 2px;
    font-size: 12px;
    color: #fff;
    text-shadow: 1px 0 0 rgba(0, 0, 0, .15);
    z-index: inherit 2;
    padding-left: 15px;
    background-size: 11px 10px;
    background-repeat: no-repeat;
    background-position: 0 4px;
}

.u-earp {
    background-image: url(./assets/icon/icon_music.svg);
}
.player-view{
    opacity: 1;
    transform: scale(1);
    transition: all .5s;
}
</style>
