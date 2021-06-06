import {
    useWindowSize
} from '@vant/use';

(async () => {
    const {
        width,
        height
    } = useWindowSize();
    let modules;
    if (width.value > height.value) {
        modules = await import("./pc.js");
    } else {
        modules = await import("./mobile.js")
    }
    modules.app.mount('#app')
})();