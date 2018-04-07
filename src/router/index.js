import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/HelloWorld'
import Login from '@/components/login'
import Home from '@/components/Home'
import myHomePage from '@/components/MyHomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/MyHomePage',
      component: myHomePage
    }
  ]
})
