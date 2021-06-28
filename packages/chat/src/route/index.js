import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import Music from '@/views/Music.vue';

export const routes_accessable = [{
    path: '/music',
    name: 'Music',
    component: Music
}]

const routes = [
    ...routes_accessable
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router