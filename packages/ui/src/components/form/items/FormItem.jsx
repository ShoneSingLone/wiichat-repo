import { defineComponent, reactive} from "vue";
import {v4 as uuid} from "uuid";
import _ from "lodash";
import { ITEM_TYPE } from "../../../utils/types";


/* 数据更新机制问题未解决：目前的方案是通过needUpdateOptions来控制 */
const afterUpdateOptions = ({ options, props, emit }) => {
	return emit("update:configs", _.merge({}, props.configs, {
		needUpdateOptions: false,
		options
	}));
};


/* select CheckBox-group radio-group 需要下拉选项的  */
const setOptions = ({state, props,emit}) => {
	const afterUpdateOptionsParams = { options:state.options, props, emit };
	/*Notice:
	* 需要更新数据
	*1.options没有更新过，没有数据；如果已经初始化了，不再进行计算
	*2.使用needUpdateOptions强制更新，其他参数已修改的情况
	*/
	const haveToUpdateOptions = state?.options?.length === 0 || props.configs.needUpdateOptions;

	if (!haveToUpdateOptions) return;

	/*如果直接在configs中配置options*/
	if (props?.configs?.options) {
		state.options = props.configs.options;
		afterUpdateOptions(afterUpdateOptionsParams);
		return;
	}

	/*如果是字典数据*/
	if (props?.configs?.optionsFromDict) {
		/*TODO:something 字典相关的操作，*/
		setTimeout(() => {
			state.options = [
				{value: "chengdu", label: "成都"},
				{value: "shanghai", label: "上海"},
				{value: "beijing", label: "北京"},
			];
			afterUpdateOptions(afterUpdateOptionsParams);
		}, 3000);
		return;
	}
	/*如果提供异步获取options选项的方法*/
	if (props?.configs?.optionsFromAsyncFn) {
		/*TODO:something*/
		(async () => {
			state.options = await props.configs.optionsFromAsyncFn();
			afterUpdateOptions(afterUpdateOptionsParams);
		})();
		return;
	}
};

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

		return () => {
			/* 每次render都会重新计算 */
			const {attrs, slots} = context;
			let {itemType, attrs: configsAttrs} = props.configs;

			/* 控件类型 */
			itemType = itemType || ITEM_TYPE.input;
			const properties = {
				/* 一般属性 */
				..._.merge({ id }, attrs, configsAttrs),
				/* v-model:value */
				value: props.value,
				"onUpdate:value": (e) => emit("update:value", e),
			};
			const setOptionsParams = { state, props, emit };
			/*根据类型返回不同的组件*/
			const component_map = {
				[ITEM_TYPE.input]: () => <aInput {...properties} />,
				[ITEM_TYPE.select]: () => {
					setOptions(setOptionsParams);
					const optionsJSX = state.options.map(o => <aSelectOption value={o.value}>{o.label}</aSelectOption>) || <></>;
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
