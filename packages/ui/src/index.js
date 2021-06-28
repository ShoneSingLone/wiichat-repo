// import './bs/scss/bootstrap.scss';
import xBtn from "./components/button/index";
import xIcon from "./components/icon/index.vue";
import xRipple, {installXRippleToBody} from "./components/Ripple/index.vue";
import _color from "./utils/colors";
import {setAliFont} from "./utils/font";
import _ from "lodash";
import "ant-design-vue/dist/antd.css";
// import { Button, Card, ConfigProvider, Icon, Menu, Dropdown, } from "ant-design-vue";
import antdv from "ant-design-vue";
import "./styles/common.scss";

const componentList = [xBtn, xIcon];
// const antdv_componets = [Button, Card, ConfigProvider, Icon, Menu, Dropdown];

/* export  */
export {windowOnResize} from "./utils/resize";
export const color = _color;
export default {
	antdv,
	install: (app, {mount}) => {
		setAliFont();
		/* 仿material design 水波纹 */
		installXRippleToBody(xRipple,mount);
		/* 注册app全局组件 */
		app.use(antdv);
		// antdv_componets.forEach(component => app.use(component));
		componentList.forEach(component => app.component(component.name, component));
	}
};
