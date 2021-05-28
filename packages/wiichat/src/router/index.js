import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import Music from '@ventose/music';
import About from '@/views/About.vue';

export const routes_accessable = [
    {
        path: '/music',
        name: 'Music',
        component: Music
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const routes = [
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    ...routes_accessable
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router