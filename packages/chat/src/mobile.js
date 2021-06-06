import { Button } from 'vant';

import {
    createApp
} from 'vue'
import App from './App.vue'
const componets = [Button, Card];

export const app = createApp(App);

componets.forEach(component => app.use(component));