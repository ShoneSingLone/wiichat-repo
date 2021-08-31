import { createApp } from "vue";
import AppAdmin from "./AppAdmin.vue";
import myui from "@ventose/ui/dist/ui.es";
import "@ventose/ui/dist/style.css";
import { setAppI18n } from "./language/language";

const app_admin = createApp(AppAdmin);
setAppI18n(app_admin);
app_admin.use(myui, { mount: "#app" });
app_admin.mount("#app");
