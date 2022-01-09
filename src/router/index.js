import { createRouter, createWebHistory } from 'vue-router'
import ViewGatos from '../views/ViewGatos.vue'
import AddGatos from '../views/AddGatos.vue'

const routes = [
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
