import _color from "./utils/colors";
import './style/wave.css'
export const color = _color;
import './bs/scss/bootstrap.scss'
import xBtn from "./components/button";


const componentList = [
    xBtn
];

export default {
    install: (app) => {
        componentList.forEach(component => app.component(component.name, component));
    }
}