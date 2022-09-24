import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import AlphaShop from '../views/AlphaShop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component: AlphaShop
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
