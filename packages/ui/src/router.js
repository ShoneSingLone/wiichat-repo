import {
	createRouter,
	createWebHashHistory
} from "vue-router";
import HW from "./components/HelloWorld.vue";
import _ from "lodash";
import button from "./views/Button.vue";
import ViewForm from "./views/form/index.vue";
import ViewTabs from "./views/tabs/index.vue";

const routeObj = {
	ViewForm,
	button: button,
	hello: HW,
	ViewTabs
};


export const routes = _.map(routeObj, (component, name) => ({
	path: `/${name}`,
	name,
	component
}));

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});