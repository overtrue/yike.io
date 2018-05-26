import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'
import { routes as home } from '@modules/home'

Vue.use(Router);

const AppRoute = {
  path: '/',
  component: () => import('../App'),
  children: [...home],
};

const routes = [AppRoute];

const router = new Router({
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  mode: 'history',
});

router.beforeEach(beforeEach);

export default router
