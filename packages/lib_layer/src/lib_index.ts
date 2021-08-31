import layer from "./packages/index";
import { initTippy } from "./packages/tippy";
/* 独立使用 */
export { layer };

export default {
	install(app) {
		/* layer tips */
		initTippy();
		app.config.globalProperties.layer = layer;
	},
};
