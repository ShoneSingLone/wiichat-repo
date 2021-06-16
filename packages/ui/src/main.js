import {
    createApp
} from 'vue'
import AppUI from './AppUI.vue'
import myui from "./index";

createApp(AppUI)
    .use(myui, {
        mount: "#app"
    })
    .mount('#app')