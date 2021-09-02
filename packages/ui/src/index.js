// import './bs/scss/bootstrap.scss';
import xBtn from "./components/button/index";
import xIcon from "./components/icon/index.vue";
import xFormItem from "./components/form/items/xFormItem";
import xRipple, {
	installXRippleToBody
} from "./components/Ripple/index.vue";
import _color from "./utils/colors";
import {
	setAliFont
} from "./utils/font";
// import _ from "lodash";
import "ant-design-vue/dist/antd.css";
import antdv from "ant-design-vue";

import "./styles/common.scss";
import {
	defineItem
} from "./components/form/xForm.define";

const componentList = [xBtn, xIcon, xFormItem];


/* export  */
export {
	defineItem
};
export {
	windowOnResize
}
	from "./utils/resize";
export const color = _color;
export default {
	antdv,
	install: (app, { mount } = { mount: "#app" }) => {
		setAliFont();
		/* 仿material design 水波纹 */
		installXRippleToBody(xRipple, mount);
		/* 注册app全局组件 */
		app.use(antdv);
		// antdv_componets.forEach(component => app.use(component));
		componentList.forEach(component => app.component(`x${component.name}`, component));
	}
};