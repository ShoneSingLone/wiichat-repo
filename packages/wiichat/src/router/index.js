import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Home from '@/views/Home.vue';
const fs = require('fs');

(async () => {
    const res = await fs.promises().readdir("./");
    console.log(fs.promises, res)
})();


const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router