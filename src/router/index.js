// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import InicioSesion from '../components/InicioSesion.vue'
import EditarUsuario from '../components/EditarUsuario.vue'
import vistaProductos from '../components/vistaProductos.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: vistaProductos
    },
    {
      path: '/Login',
      name: 'Inicio de Sesion',
      component: InicioSesion
    },
    {
      path: '/EditUSer',
      name: 'Editar USuario',
      component: EditarUsuario
    },
    {
      path: '/Reviews',
      name: 'Reseñas',
      component: vistaProductos
    }
  ]
})

export default router