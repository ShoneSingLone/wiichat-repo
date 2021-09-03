import { defineComponent, reactive } from "vue";
import { v4 as uuid } from "uuid";
import _ from "lodash";
import { ITEM_TYPE, i_form_item, t_item_render } from "../xForm.define";
import { renderInput } from "./itemRenders/input";
import { renderSelect } from "./itemRenders/select";
import { renderRadioGroup } from "./itemRenders/radioGroup";

export default defineComponent({
  name: "xFormItem",
  emits: ["update:value", "change"],
  props: {
    /* v-model:vlaue的值 */
    value: {
      type: [Object, String, Number, Boolean],
      default() {
        return "";
      },
    },
    /* 配置信息 */
    configs: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(props: any, context) {
    /* 创建的时候计算一次 */
    const { emit } = context;
    const id = `x-form-item_${uuid()}`;
    const state = reactive({ options: [] });

    return () => {
      /* 每次render都会重新计算 */
      const { attrs, slots } = context;
      let { itemType, attrs: configsAttrs } = props.configs;

      /* 控件类型 */
      itemType = itemType || ITEM_TYPE.input;
      const properties = {
        /* 一般属性 */
        ..._.merge({ id }, attrs, configsAttrs),
        /* v-model:value */
        class: "x-form-item",
        value: props.value,
        "onUpdate:value": (e) => {
          emit("change", e);
        },
      };
      const setOptionsParams = { state, props, emit };
      /*根据类型返回不同的组件*/
      const component_map: i_form_item<t_item_render> = {
        input: () => renderInput(properties),
        select: () => renderSelect(setOptionsParams, properties),
        radioGroup: () => renderRadioGroup(setOptionsParams, properties),
        render: undefined,
        number: undefined,
        switch: undefined,
        textarea: undefined,
      };

      return (
        (component_map[itemType] && component_map[itemType]()) || <h1>error</h1>
      );
    };
  },
});
