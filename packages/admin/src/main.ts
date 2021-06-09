import { createApp } from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import {Button, Card, ConfigProvider, Icon, Menu, Dropdown} from "ant-design-vue";


const componets = [Button, Card, ConfigProvider, Icon, Menu, Dropdown];

const app_admin = createApp(App);

componets.forEach((component) => app_admin.use(component));

app_admin.mount("#app");
