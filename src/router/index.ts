import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PokemonList',
    component: () => import('../views/PokemonList/index.vue'),
    meta: {
      title: 'Pokédex',
    }
  },
  {
    path: '/pokemon/:name',
    name: 'PokemonDetail',
    component: () => import('../views/PokemonDetail/index.vue'),
    props: true,
    meta: {
      title: 'Detalles Pokémon',
    }
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
