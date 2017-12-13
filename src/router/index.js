import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Find from '@/views/Find'
import Music from '@/views/Music'
import Friend from '@/views/Friend'
import Account from '@/views/Account'
import PlayList from '@/views/PlayList'
import Player from '@/views/Player'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Main,
            children: [
                {
                    path: '/',
                    name: 'main',
                    alias: 'home',
                    component: Find
                },
                {
                    path: 'music',
                    component: Music
                },
                {
                    path: 'friend',
                    component: Friend
                },
                {
                    path: 'account',
                    component: Account
                },
            ],

        },
        {
            name: 'playList',
            path: '/playList/:id',
            component: PlayList,
        },
        {
            name: 'player',
            path: '/player/:id',
            component: Player,
        }
    ]
})
