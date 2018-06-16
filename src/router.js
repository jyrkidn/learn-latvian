import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

// const Home = () => import('./views/Home.vue')
const Overview = () => import('./views/Overview.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    }
  ]
})
