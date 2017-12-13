// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import App from './App'
import api from '@/api'
import Home from './components/HelloFromVux'
import store from '@/store/index.js'
Vue.use(api);
// Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,  //es语法这里相当于 store:store
  router,
  render: h => h(App)
}).$mount('#app-box')
