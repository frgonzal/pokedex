import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PokemonList',
    component: () => import('../views/PokemonList/index.vue'),
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/pokemon/:name',
    name: 'PokemonDetail',
    component: () => import('../views/PokemonDetail/index.vue'),
    props: true,
    meta: { layout: 'DefaultLayout' },
  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/' 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
