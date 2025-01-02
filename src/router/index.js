import { createRouter, createWebHistory } from 'vue-router';

// Importation des pages
import Home from '../views/Home.vue';
import Destinations from '../views/Destinations.vue';
import Offers from '../views/Offers.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/destinations', name: 'Destinations', component: Destinations },
  { path: '/offers', name: 'Offers', component: Offers },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
