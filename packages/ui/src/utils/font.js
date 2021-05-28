import $ from "jquery";

export const setAliFont = () => $("<script/>", {
    src: '//at.alicdn.com/t/font_832872_70g7lgiovvd.js'
}).appendTo($("body"));