import './bs/scss/bootstrap.scss';
import xBtn from "./components/button/index.vue";
import xIcon from "./components/icon/index.vue";
import xRipple, {
    installXRippleToBody
} from "./components/Ripple/index.vue";
import _color from "./utils/colors";
import {
    setAliFont
} from "./utils/font"
import _ from "lodash";
export {
    windowOnResize
}
from "./utils/resize"
export const color = _color;

const componentList = [xBtn, xIcon];

export default {
    install: (app) => {
        setAliFont();
        /* 仿material design 水波纹 */
        installXRippleToBody(xRipple);
        /* 注册app全局组件 */
        componentList.forEach(component => app.component(component.name, component));
    }
}