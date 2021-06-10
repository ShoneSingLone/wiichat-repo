import { createApp } from "vue";
import AppAdmin from "./AppAdmin.vue";
import myui from "@ventose/ui/dist/ui.es";

const app_admin = createApp(AppAdmin);
app_admin.use(myui);
app_admin.mount("#app");
