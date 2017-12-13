import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import url from '@/api/url';
Vue.use(Vuex);

const state = {
    loading: true,
    height: 0,
    wrapHeight: 500,
    audio: {
        'id': 0,
        'name': '歌曲名称',
        'singer': '演唱者',
        'picUrl': '/static/header_bg.png',
        'src': '',
        'album': ''
    },
    songList: [],
    showPlayer: false,
    playing: false
}
const getters = {
    audio: state => state.audio,
    showPlayer: state => state.showPlayer,
    playing: state => state.playing
}
//Mutations修改状态
const mutations = {
    change(state,value) {
        state.loading = value;
    },
    setHeight(state, value) {
        state.height = value;
    },
    setWrapHeight(state, value) {
        state.wrapHeight = value;
    },
    addSongList(state, song) {  //Mutation会接受state作为第一个参数
        let items = Array.prototype.concat.call(song);
        items.forEach(element => {
            let flag = false;
        });
        state.songList.push(song);
    },
    setAudio(state) {
        state.audio = state.songList[0];
    },
    setAudioSrc(state,value) {
        state.audio.src = value;
    },
    changePlayer(state,value) {
        state.showPlayer = value;
    },
    togglePlaying(state) {
        if (state.playing) {
            state.playing = false;
        } else {
            state.playing = true;
        }
    }
}

const actions = {
    getSong({ commit }, id) {
        axios.get(url.musicUrl + '?id=' + id).then((res) => {
            state.playing = true;
            commit('setAudio');
            commit('setAudioSrc', res.data.data[0].url);
        });
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
