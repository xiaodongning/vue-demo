// const URL = 'https://neteaseapi.herokuapp.com';
// const URL = 'http://47.94.13.62:3000/api';

// const api = {
//     banner: URL + '/banner',
//     personalized: URL + '/personalized',
//     privatecontent: URL + '/personalized/privatecontent',
//     playlistdetail: URL + '/playlist/detail',
//     musicUrl: URL + '/music/url',
// }
import api from './url';
export default {
    install(Vue, options) {
        Vue.prototype.apiUrl = api
    }
}
