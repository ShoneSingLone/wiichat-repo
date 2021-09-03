import _, { isArray, isPlainObject } from "lodash";
/* 数据更新机制问题未解决：目前的方案是通过needUpdateOptions来控制 */
const afterUpdateOptions = ({ options, props, emit }) => {
  return emit(
    "update:configs",
    _.merge({}, props.configs, {
      needUpdateOptions: false,
      options,
    })
  );
};

/* select CheckBox-group radio-group 需要下拉选项的  */
export const setOptions = ({ state, props, emit }) => {
  const afterUpdateOptionsParams = { options: state.options, props, emit };
  /*Notice:
   * 需要更新数据
   *1.options没有更新过，没有数据；如果已经初始化了，不再进行计算
   *2.使用needUpdateOptions强制更新，其他参数已修改的情况
   */
  const haveToUpdateOptions =
    state?.options?.length === 0 || props.configs.needUpdateOptions;

  if (!haveToUpdateOptions) return;

  /*如果直接在configs中配置options*/
  if (
    _.isArray(props?.configs?.options) &&
    props?.configs?.options.length > 0
  ) {
    const firstItem = props?.configs?.options[0];
    if (isPlainObject(firstItem)) {
      state.options = props.configs.options;
    } else {
      state.options = props.configs.options.map((i) => ({
        label: i,
        value: i,
      }));
    }
    afterUpdateOptions(afterUpdateOptionsParams);
    return;
  }

  /*如果是字典数据*/
  if (props?.configs?.optionsFromDict) {
    /*TODO:something 字典相关的操作，*/
    setTimeout(() => {
      state.options = [
        { value: "chengdu", label: "成都" },
        { value: "shanghai", label: "上海" },
        { value: "beijing", label: "北京" },
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
