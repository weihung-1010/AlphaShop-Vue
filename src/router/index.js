import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import ShoppingCart from '../views/ShoppingCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component: ShoppingCart
  },
  {
    path:'*',
    name:'not-found',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
