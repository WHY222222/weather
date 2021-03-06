// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './router'
import store from './store/'
import App from './App'
import Home from './components/HelloFromVux'

import { AlertPlugin} from 'vux'
Vue.use(AlertPlugin)
import { cookie } from 'vux'
// Vue.use(cookie)

Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body)

Vue.config.productionTip = false


axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
