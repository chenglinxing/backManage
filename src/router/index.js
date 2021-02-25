import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@c/Layout"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/login/index')
  },
  {
    path: '/',
    
    component: Layout,
    children:[
      {
        path:'/home',
        meta: {
          title:'首页',
          icon:"el-icon-s-home"
        },
        component:()=>import('../views/home/index')
      },
      {
        path:'/plugUnit',
        meta: {
          title:'插件',
          icon:"el-icon-s-home"
        },
        component:()=>import('../views/plugUnit/index')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



