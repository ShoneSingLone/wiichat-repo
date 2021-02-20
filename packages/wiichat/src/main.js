import {
    createApp
} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import myui, {
    windowOnResize
} from "@ventose/ui";


windowOnResize(function (e) {
    const {
        outerHeight,
        outerWidth
    } = window;
    console.log("🚀 ~ file: index.js ~ line 15 ~ e", outerHeight, outerWidth);
});

const app = createApp(App);

app
    .use(myui)
    .use(store)
    .use(router);

app.mount('#app');