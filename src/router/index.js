import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccueilView from '../views/AccueilView.vue'
import MedecinView from '../views/MedecinView.vue'
import RapportsView from '../views/RapportsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: AccueilView
  },
  {
    path: '/Medecin',
    name: 'Medecin',
    component: MedecinView
  },
  {
    path: '/Rapports',
    name: 'Rapport',
    component: RapportsView
  },
  {
    path: '/ListeRapports/:idMedecin',
    name: 'Rapports',
    component: MedecinView
  },

  {
    path: '/FicheMedecin',
    name: 'FicheMedecin',
    component: MedecinView

  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
