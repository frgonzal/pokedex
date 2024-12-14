import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);


router.beforeEach((to, _, next) => {
  document.title = (to.meta.title as string)  || 'Pokédex';
  next();
});

app.use(router);
app.mount('#app');
