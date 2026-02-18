import { createRouter, createWebHistory } from 'vue-router';
import Room from './../components/UserCamera.vue';
import Home from './../components/ControlPanel.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/room/:id', component: Room }   // <-- здесь правильно
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
