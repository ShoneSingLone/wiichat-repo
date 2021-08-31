import { createApp } from "vue";
import Example from "./Example.vue";
import layer from "./lib_index";

const example = createApp(Example);
example.use(layer);
example.mount("#app");