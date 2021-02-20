import './bs/scss/bootstrap.scss';
import xBtn from "./components/button/index.vue";
import xIcon from "./components/icon/index.vue";
import xRipple, {
    installXRippleToBody
} from "./components/Ripple/index.vue";
import _color from "./utils/colors";
import $ from "jquery";
import _ from "lodash";
export const color = _color;

export function windowOnResize(fn) {
    $(window).on('resize', _.debounce(fn, 300));
}

const componentList = [
    xBtn,
    xIcon
];

export default {
    install: (app) => {
        $("<script/>", {
            src: '//at.alicdn.com/t/font_832872_70g7lgiovvd.js'
        }).appendTo($("body"))
        installXRippleToBody(xRipple);
        componentList.forEach(component => app.component(component.name, component));
    }
}