import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import HW from "./components/HelloWorld.vue"
import _ from "lodash"
import button from "./views/Button.vue"
import form from "./views/form/index.vue";


const routeObj = {
    form,
    button: button,
    hello: HW
}

export const routes = _.map(routeObj, (component, name) => ({
    path: `/${name}`,
    name,
    component
}))

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})