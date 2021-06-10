import { createApp } from "vue";
import App from "./App.vue";
import myui from "@ventose/ui";

const app_admin = createApp(App);
app_admin.use(myui);
app_admin.mount("#app");
