import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Reseñas from '@/components/Reseñas.vue'
import EditarUsuario from './components/EditarUsuario.vue'
import InicioSesion from './components/InicioSesion.vue'

const router =createRouter({
    history:createWebHashHistory(),
    routes: [
        
        {path: '/Re', name: 'Re', component: Reseñas },
        {path: '/edit', name: 'edit',component: EditarUsuario},
        {path: '/inicio', name: 'inicio',component: InicioSesion}

    ]
})

createApp(App)
.use(router)
.mount('#app')
