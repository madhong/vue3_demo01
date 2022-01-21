import { createApp } from 'vue'
import App from './App.vue'
import ccc from '../src/views/dist/ccc.common.js'
console.log('************', ccc);
createApp(App)
    .use(ccc)
    .mount('#app')
