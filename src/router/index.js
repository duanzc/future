import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/login/Login.vue'
// import Login from '../views/login/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    redirect: 'top',
    component: () => import('../views/home/home.vue'),
    children: [
      {
        path: '/es',
        name: 'essix',
        component: () => import('../views/es/ECMAScript.vue')
      },
      {
        path: '/component',
        name: 'component',
        component: () => import('../views/home/Components.vue')
      },
      {
        path: '/top',
        name: 'top',
        component: () => import('../views/home/Top.vue')
      },
      {
        path: '/canvas',
        name: 'canvas',
        component: () => import('../views/canvas/Canvas.vue')
      },
      {
        path: '/formwork',
        name: 'formwork',
        component: () => import('../views/formworking/FormWorking.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
