import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import $ from "jquery";
export const initTippy = () => {
	const targetSelector = "[data-ventose-tips]";
	$("body")
	/* 短时间内鼠标移动到tips内部 */
		.delegate(targetSelector, "mouseenter", function() {
			console.log("🚀 ~ file: tippy.ts ~ line 9 ~ .delegate ~ mouseenter");
		})
		.delegate(targetSelector, "mouseleave", function() {
			console.log("🚀 ~ file: tippy.ts ~ line 13 ~ mouseleave");
		});
};
