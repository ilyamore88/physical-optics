import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/Hello.vue';
import Week4 from '../components/weeks/Week4.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/week4',
    name: 'Week4',
    component: Week4
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
