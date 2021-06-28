import {computed, defineComponent, reactive} from "vue";
import {v4 as uuid} from "uuid";
import _ from "lodash";
import {ITEM_TYPE} from "../../../utils/types";

export default defineComponent({
	name: "FormItem",
	props: {
		/* v-model:vlaue的值 */
		value: {
			type: [Object, String, Number, Boolean],
			default() {
				return "";
			}
		},
		/* 配置信息 */
		configs: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	setup(props, context) {
		/* 创建的时候计算一次 */
		const {emit} = context;
		const id = `x-form-item_${uuid()}`;
		const state = reactive({options: []});
		const afterUpdateOptions = (options) => emit("update:configs", _.merge({}, props.configs, {
			needUpdateOptions: false,
			options
		}));

		return () => {
			/* 每次render都会重新计算 */
			const {attrs, slots} = context;
			let {itemType, attrs: configsAttrs} = props.configs;

			/* 控件类型 */
			itemType = itemType || ITEM_TYPE.input;
			const properties = {
				..._.merge({id}, attrs, configsAttrs),
				value: props.value,
				"onUpdate:value": (e) => emit("update:value", e),
			};

			const component_map = {
				[ITEM_TYPE.input]: () => <aInput {...properties} />,
				[ITEM_TYPE.select]: () => {
					(() => {
						/*如果已经初始化了，不再进行计算*/
						/*如果直接在configs中配置options*/
						/*Notice:有可能中途改变=>使用newOptions*/
						if (state.options.length > 0 && !props.configs.needUpdateOptions) return;						/*如果直接在configs中配置options*/
						if (props.configs.options) {
							state.options = props.configs.options;
							afterUpdateOptions(state.options);
							return;
						}
						/*如果是字典数据*/
						if (props.configs.optionsFromDict) {
							/*TODO:something*/
							setTimeout(() => {
								state.options = [
									{value: "chengdu", label: "成都"},
									{value: "shanghai", label: "上海"},
									{value: "beijing", label: "北京"},
								];
								afterUpdateOptions(state.options);
							}, 3000);
							return;
						}
						/*如果提供异步获取options选项的方法*/
						if (props.configs.optionsFromAsyncFn) {
							/*TODO:something*/
							(async () => {
								state.options = await props.configs.optionsFromAsyncFn();
								afterUpdateOptions(state.options);
							})();
							return;
						}

					})();

					const optionsJSX = state.options.map(o => <aSelectOption
						value={o.value}>{o.label}</aSelectOption>) || <></>;

					return (
						<aSelect {...properties}>
							{optionsJSX}
						</aSelect>
					);
				}
			};

			return (component_map[itemType] && component_map[itemType]()) || <h1>error</h1>;
		};
	},
});
