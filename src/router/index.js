import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import Projects from '@/views/Projects.vue';
import Skills from '@/views/Skills.vue';

const routes = [
  { path: '/', component: LandingPage }, // Default landing page
  { path: '/projects', component: Projects },
  { path: '/skills', component: Skills },
];

const router = createRouter({
  history: createWebHistory('/my-portfolio/'),
  routes,
});

export default router;
