
import { defineComponent } from "vue";
export default defineComponent({
	name: "xFormItem",
	props: {
		configs: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	setup(props, context) {
		return () => {
			const {configs: { text, attrs: configsAttrs }} = props;
			const { slots } = context;
			return ( <a-input v-model:value={ } placeholder="Basic usage" /> );
		};
	},
});
