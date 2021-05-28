import {
    createApp
} from 'vue'
import App from './App.vue'
import "ant-design-vue/dist/antd.css";
import {
    Button,
} from "ant-design-vue"

export const app = createApp(App);
[Button].forEach(component => app.use(component))