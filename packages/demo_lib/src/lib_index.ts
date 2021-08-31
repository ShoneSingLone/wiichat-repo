import layer from "./packages/index";

/* 独立使用 */
export { layer };

export default {
	install(app) {
		/* layer tips */
		
		app.config.globalProperties.layer = layer;
	},
};
