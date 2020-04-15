import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/Hello.vue';
import Week2 from '../components/weeks/Week2.vue';
import Week3 from '../components/weeks/Week3.vue';
import Week4 from '../components/weeks/Week4.vue';
import Week6 from '../components/weeks/Week6.vue';
import Week7 from '../components/weeks/Week7.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/week2',
    name: 'Week2',
    component: Week2
  },
  {
    path: '/week3',
    name: 'Week3',
    component: Week3
  },
  {
    path: '/week4',
    name: 'Week4',
    component: Week4
  },
  {
    path: '/week6',
    name: 'Week6',
    component: Week6
  },
  {
    path: '/week7',
    name: 'Week7',
    component: Week7
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
