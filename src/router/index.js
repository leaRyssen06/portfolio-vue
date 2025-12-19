import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cv', component: CV },
  { path: '/projets', component: Projects },
  { path: '/projets/:id', component: Project },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
