import Vue from 'vue'
// import VueRouter from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router'

import ViewGatos from '../views/ViewGatos.vue'
import AddGatos from '../views/AddGatos.vue'

const router = createRouter({
    history: createWebHistory(),
    redirect: '/',
    rounter: [
        {
            path: '/',
            name: 'ViewGatos',
            component: ViewGatos
          },
          {
            path: '/nuevo',
            name: 'AddGatos',
            component: AddGatos
          },
    ]
})

export default router
