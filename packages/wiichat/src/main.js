import {
    createApp
} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {
    store
} from './store'
import myui from "@ventose/ui";


const app = createApp(App);

app
    .use(myui)
    .use(store)
    .use(router);
app.mount('#app');