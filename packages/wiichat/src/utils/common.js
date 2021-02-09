import $ from 'jquery'

export function setThemeColor(color) {
    $(`meta[name='theme-color']`).attr('content', color);
}