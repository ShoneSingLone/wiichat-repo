import $ from "jquery";
export const windowOnResize = (fn) => {
    $(window).on('resize', _.debounce(fn, 300))
    fn();
};