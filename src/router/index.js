import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Shop',
      name: 'Shop',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ShopView.vue'),
      children: [
        {
          path: '/Shop/IphoneCart',
          component: () => import('../views/IphoneCart.vue')
        }
      ]
    },

    {
      path: "/CartView",
      name: "CartView",
      component: () => import('../views/CartView.vue'),
      props: true
   
    },
   
    {
      path:"/SignUp",
      name:"signup",
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }

  ]
})

export default router
