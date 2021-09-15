import {
	createApp
} from "vue";
import AppUI from "./AppUI.vue";
import myui from "./index";
import { router } from "./router.js";

createApp(AppUI)
	.use(router)
	.use(myui, { mount: "#app" })
	.mount("#app");