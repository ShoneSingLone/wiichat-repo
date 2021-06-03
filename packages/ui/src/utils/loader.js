import $ from "jquery";
import _ from 'lodash';

export const loadLib = ({src, globalName}) => {
    return new Promise((resolve, reject) => {
        const id = _.camelCase(src);
        const selector = `#${id}`;
        let $script = $(selector);
        if ($script.length < 1) {
            $script = $("<script/>", {id});
            $script.appendTo($('body'));
            $script[0].onload = () => resolve(window[globalName]);
            $script[0].onerror = reject;
            $script[0].src = src;
        } else {
            resolve(window[globalName]);
        }
    })
}
