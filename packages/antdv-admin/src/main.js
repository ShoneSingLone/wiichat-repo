import { createApp } from "vue";
import AppAdmin from "./AppAdmin.vue";
import myui from "@ventose/ui";
import "@ventose/ui/dist/style.css";

import { appI18n } from "./language/language";

const app_admin = createApp(AppAdmin);
app_admin.use(appI18n);
app_admin.use(myui, { mount: "#app" });
app_admin.mount("#app");
