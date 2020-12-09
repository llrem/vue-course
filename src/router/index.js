import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:()=>import('../views/home/index'),
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('../components/home/courseArea'),
      meta:{
        requireAuth:true
      }
    }]
  },
  {
    path:'/course',
    name:'course',
    component:()=>import('../views/course/index'),
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
