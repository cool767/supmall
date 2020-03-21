import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '../views/category/category'
import Home from '../views/home/home'
import Profile from '../views/profile/profile'
import Shopcart from '../views/shopcart/shopcart'
import Detial from '../views/detial/Detial'


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/detial/:iid',
    component:Detial
  },

]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
