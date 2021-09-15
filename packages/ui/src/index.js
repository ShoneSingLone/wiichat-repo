// import './bs/scss/bootstrap.scss';
import xBtn from "./components/button/index.jsx";
import xIcon from "./components/icon/index.vue";
import xForm from "./components/form/xForm.vue";
import xFormItem from "./components/form/items/xFormItem.tsx";
import xRipple, { installXRippleToBody } from "./components/Ripple/index.vue";
import _color from "./utils/colors";
import { setAliFont } from "./utils/font";
import _ from "lodash";
import "ant-design-vue/dist/antd.css";
import antdv from "ant-design-vue";
import "./styles/common.scss";
import { defineItem } from "./components/form/xForm.define.tsx";
import { windowOnResize } from "./utils/resize";



/* export  */
/* 组件 */
export const xComponents = { xBtn, xIcon, xForm, xFormItem };
/* 工具函数 */
export { _, defineItem };
/*  */
export { windowOnResize };
/*  */
export const color = _color;
export default {
	antdv,
	install: (app, { Vue, mount } = { mount: "#app" }) => {
		setAliFont();
		/* 仿material design 水波纹 */
		installXRippleToBody(xRipple, mount);
		/* 注册app全局组件 */
		app.use(antdv);
		// antdv_componets.forEach(component => app.use(component));
		_.forEach(xComponents, (component, componentName) => app.component(componentName, component));
	}
};