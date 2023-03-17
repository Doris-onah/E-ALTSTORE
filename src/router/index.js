import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import LoginUser from '../views/LoginUser.vue'
import SignUp from '../views/SignUp.vue'
import NotFound from '../views/NotFound.vue'
import TrendItem from '../views/TrendItem.vue'
import IphoneCart from '../views/IphoneCart.vue'


const isuserLoggedIn = true;
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
      name: 'ShopView',
      component: ShopView,
      meta: { isAuth: true},
   

      children: [
        {
        path: '/Shop',
       component:TrendItem,
        },
        {
          path: '/IphoneCart',
          component: IphoneCart,
        },
      
        {
          path: '/TrendItem',
          name: 'TrendItem',
          component: TrendItem,
       
        },
      ],
  
    },
   
    {
      path: '/LoginUser',
      name: 'LoginUser',
      component: LoginUser,
    
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
   
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    }
  ],
});


router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (isuserLoggedIn) {
      next();
    } else {
      next("/LoginUser");
    }
  } else {
    next();
  }
  
});

export default router;









// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import ShopView from '../views/ShopView.vue'


// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
//     {
//       path: '/Shop',
//       name: 'ShopView',
//       component: ShopView,
//       children: [
       
//         {
//           path: "IphoneCart",
//           component: () => import('../views/IphoneCart.vue'),
//           // props: route => ({...route.params,id : route.params.id})
//         },
//         {
//           path:"TrendItem",
//           component: () => import('../views/TrendItem.vue'),
//           // props: route => ({...route.params,id : route.params.id})
//         },
//       ]
//     },

//     {
//       path: "/CartView",
//       name: "CartView",
//       component: () => import('../views/CartView.vue'),
//       props: true
   
//     },
//     {
//       path: "/LoginUser",
//       name: "LoginUser",
//       component: () => import("../views/LoginUser.vue"),
//       meta: { requiresAuth: false },
//     },
   
//     {
//       path:"/SignUp",
//       name:"signup",
//       component: () => import('../views/SignUp.vue'),
//       meta: { requiresAuth: false },
//     },
//     {
//       path: '/:pathMatch(.*)*',
//       name: 'not-found',
//       component: () => import('../views/NotFound.vue')
//     }

//   ],
// });

 



// export default router
