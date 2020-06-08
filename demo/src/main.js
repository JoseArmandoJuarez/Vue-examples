// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Posts from './components/Posts';
import Contact from './components/Contact';

Vue.use(VueRouter);

const navigationRoutes = [
  { path: '/', component: Posts },
  { path: '/contact', component: Contact }
];

Vue.config.productionTip = false;

const router = new VueRouter({routes: navigationRoutes});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App }, // Import to be able to use App.vue
  template: '<App/>' // This template is from the App.vue
});
