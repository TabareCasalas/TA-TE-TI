import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Leaderboard from './views/Leaderboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: Leaderboard
    }
  ],
  linkActiveClass: 'is-active'
})