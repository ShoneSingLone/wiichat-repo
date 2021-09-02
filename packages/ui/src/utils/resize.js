import $ from "jquery";
import _ from "lodash";

export const windowOnResize = (fn) => {
	$(window).on("resize", _.debounce(fn, 300));
	fn();
};