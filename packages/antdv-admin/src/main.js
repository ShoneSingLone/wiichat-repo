import { createApp } from "vue";
import AppAdmin from "./AppAdmin.vue";
import { appI18n } from "./language/language";
import "@ventose/ui/dist/style.css";
import * as Vue from "vue";
import _ from "lodash";

window.Vue = Vue;
window._ = _;

(async () => {
    await import("@ventose/ui/dist/ui.umd")
    const myui = window['ventose@ui']['default'];
    const app_admin = createApp(AppAdmin);
    app_admin.use(appI18n);
    app_admin.use(myui, {
        mount: "#app"
    });
    app_admin.mount("#app");

})();