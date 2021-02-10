import _color from "./utils/colors";
import './style/wave.css'
export const color = _color;
import './bs/scss/bootstrap.scss'
import $ from "jquery"
import xBtn from "./components/button/index.vue";

function watchClickRipple() {
    if (watchClickRipple.done) return;
    $('body').on('click', '.ripple', function (e) {
        console.log(e, this, $(this));
    })
    watchClickRipple.done = true;
}

const componentList = [
    xBtn
];

export default {
    install: (app) => {
        watchClickRipple();
        watchClickRipple();
        watchClickRipple();
        componentList.forEach(component => app.component(component.name, component));
    }
}