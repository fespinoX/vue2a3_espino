import Vue from 'vue'
// import VueRouter from 'vue-router'

import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    redirect: '/',
    rounter: [
        {
            path: '/',
            name: 'Home',
            component: Home
          },
          {
            path: '/michis',
            name: 'Michis',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/Michis.vue')
        }
    ]
})

export default router
