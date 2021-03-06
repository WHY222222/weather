import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloFromVux'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../views/login/login.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../views/login/login.vue'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['../views/register/register.vue'], resolve)
    },
    {
      path: '/weather',
      name: 'weather',
      component: resolve => require(['../views/weather/weather.vue'], resolve)
    },
    {
      path: '/cityWeather',
      name: 'cityWeather',
      component: resolve => require(['../views/weather/cityWeather.vue'], resolve)
    }
  ]
})
