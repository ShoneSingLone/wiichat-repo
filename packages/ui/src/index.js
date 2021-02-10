import './bs/scss/bootstrap.scss';
import xBtn from "./components/button/index.vue";
import xRipple, { installXRippleToBody } from "./components/Ripple/index.vue";
import _color from "./utils/colors";
export const color = _color;

const componentList = [
    xBtn,
];

export default {
    install: (app) => {
        installXRippleToBody(xRipple);
        componentList.forEach(component => app.component(component.name, component));
    }
}