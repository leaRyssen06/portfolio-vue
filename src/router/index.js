import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cv', name: 'CV', component: CV },
  { path: '/projets', name: 'Projects', component: Projects },
  { path: '/projets/:id', name: 'Project', component: Project },
  { path: '/contact', name: 'Contact', component: Contact },
  // Redirection automatique si une page n'est pas trouvée (utile pour GitHub Pages)
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  // On ajoute import.meta.env.BASE_URL pour que le routeur s'adapte à l'URL de GitHub
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
