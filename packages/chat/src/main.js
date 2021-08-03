import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
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
    .use(NutUI)
    .use(router)
    .mount("#app");