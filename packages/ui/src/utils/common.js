import $ from 'jquery'

export function setThemeColor(color) {
    let $themeColor = $(`meta[name='theme-color']`);
    if (!$themeColor[0]) {
        $("<meta/>", {name: 'theme-color', content: color}).appendTo($("head"));
    } else {
        $themeColor.attr('content', color);
    }
}
