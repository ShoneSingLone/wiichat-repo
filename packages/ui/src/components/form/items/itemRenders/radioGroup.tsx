import { setOptions } from "../xFormItem.helper";

export const renderRadioGroup = (setOptionsParams, properties) => {
  const state = setOptionsParams.state;
  setOptions(setOptionsParams);
  const optionsJSX = state.options.map((o) => ( <aRadioButton value={o.value}>{o.label}</aRadioButton> )) || null;
  return <aRadioGroup {...properties}>{optionsJSX}</aRadioGroup>;
};
