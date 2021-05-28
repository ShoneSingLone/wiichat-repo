import {
    createStore
} from 'vuex'
import {
    windowOnResize
} from "@ventose/ui";


export const store = createStore({
    state() {
        return {
            windowInfo: {
                height: 0,
                width: 0
            }
        };
    },
    getters: {
        windowInfo: (state) => state.windowInfo
    },
    mutations: {},
    actions: {},
    modules: {}
});

windowOnResize(() => {
    const {
        outerHeight,
        outerWidth
    } = window;
    store.state.windowInfo.height = outerHeight;
    store.state.windowInfo.width = outerWidth;
});
