import { createApp } from "vue";
import AppAdmin from "./AppAdmin.vue";
// import myui from "@ventose/ui/dist/ui.es";
import myui from "@ventose/ui/src";
import "@ventose/ui/dist/style.css";

const app_admin = createApp(AppAdmin);
app_admin.use(myui, {mount:"#app"});
app_admin.mount("#app");