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
import VueMoCropper from 'vue-mocropper';
import 'vue-mocropper/dist/mocropper.min.css'; 

const router = createRouter({
    history: createWebHashHistory(),
    routes: []
});

createApp(App)
    .use(Vant)
    .use(VueMoCropper)
    .use(router)
    .mount("#app");