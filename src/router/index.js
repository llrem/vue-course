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
    children:[
      {
        path:'courseInfo',
        name:'courseInfo',
        component: () => import('../components/course/content/courseInfo')
      },
      {
        path:'notice',
        name:'notice',
        component: () => import('../components/course/content/notice')
      },
      {
        path:'homework/publish',
        name:'publish',
        component:()=>import('../components/course/content/homework/publish')
      },
      {
        path:'homework/recordGrades',
        name:'recordGrades',
        component:()=>import('../components/course/content/homework/recordGrades')
      },
      {
        path:'document',
        name:'document',
        component: () => import('../components/course/content/document')
      },
      {
        path:'endCourse',
        name:'endCourse',
        component: () => import('../components/course/content/endCourse')
      }],
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
