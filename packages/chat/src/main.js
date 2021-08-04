import Vant from 'vant';
import 'vant/lib/index.css';
import {
    createApp
} from "vue";
import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import App from "./AppMobile.vue";
import "./style.scss";
const router = createRouter({
    history: createWebHashHistory(),
    routes: []
});

createApp(App)
    .use(Vant)
    .use(router)
    .mount("#app");