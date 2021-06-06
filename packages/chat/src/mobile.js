import {
    Button,
    Form,
    Field
} from 'vant';

import {
    createApp
} from 'vue'
import App from './AppMobile.vue'


import {
    createRouter,
    createWebHashHistory
} from 'vue-router';



const componets = [Button, Form, Field];
const router = createRouter({
    history: createWebHashHistory(),
    routes: []
});


export const app = createApp(App);
app.use(router)
componets.forEach(component => app.use(component));