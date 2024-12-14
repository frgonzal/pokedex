import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const app = createApp(App);
document.title = 'Pokédex';
app.mount('#app');
