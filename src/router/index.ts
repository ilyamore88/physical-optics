import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/Hello.vue';
import Week2 from '../components/weeks/Week2.vue';
import Week3 from '../components/weeks/Week3.vue';
import Week4 from '../components/weeks/Week4.vue';
import Week5 from '../components/weeks/Week5.vue';
import Week6 from '../components/weeks/Week6.vue';
import Week7 from '../components/weeks/Week7.vue';
import Week8 from '../components/weeks/Week8.vue';
import Week9 from '../components/weeks/Week9.vue';
import Week10 from '../components/weeks/Week10.vue';

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
    path: '/week5',
    name: 'Week5',
    component: Week5
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
  },
  {
    path: '/week8',
    name: 'Week8',
    component: Week8
  },
  {
    path: '/week9',
    name: 'Week9',
    component: Week9
  },
  {
    path: '/week10',
    name: 'Week10',
    component: Week10
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
