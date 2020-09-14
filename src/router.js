import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import PostView from '@/components/PostViewer'
import Writer from '@/components/Writer'
import Admin from '@/views/Admin.vue'
import Login from '@/components/Login'
import store from '@/vuex/store'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  if (store.getters.getUser) return next() // isAuth === true면 페이지 이동
  next('/login') // isAuth === false면 다시 로그인 화면으로 이동
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter: requireAuth()
    },
    {
      path: '/post/:key',
      name: 'post',
      component: PostView
    },
    {
      path: '/writer',
      name: 'writer',
      component: Writer,
      beforeEnter: requireAuth()
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/updater',
      name: 'updater',
      component: Writer,
      beforeEnter: requireAuth()
    }
  ]
})
