import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: () => import( /* webpackChunkName: "music" */ '@ventose/music')
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