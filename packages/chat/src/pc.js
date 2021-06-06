import {
    createApp
} from 'vue'
import App from './App.vue'
import "ant-design-vue/dist/antd.css";
import {
    Button,
    Card
} from "ant-design-vue"

const componets = [Button, Card];

export const app = createApp(App);

componets.forEach(component => app.use(component));