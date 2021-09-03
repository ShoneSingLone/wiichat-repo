import {
	defineConfig
} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	base:'./',
	build: {
		minify:false,
		rollupOptions: {
			// 请确保外部化那些你的库中不需要的依赖
			external: ["vue","lodash"],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: "Vue",
					lodash: "_"
				}
			}
		},
		lib: {
			entry: path.resolve(__dirname, "src/index.js"),
			name: "ventose@ui"
		}
	}

});