import { setOptions } from "../xFormItem.helper";

export const renderSelect = (setOptionsParams, properties) => {
	const state = setOptionsParams.state;
	setOptions(setOptionsParams);
	const optionsJSX = state.options.map((o) => ( <aSelectOption value={o.value}>{o.label}</aSelectOption> )) || null;
	return <aSelect {...properties}>{optionsJSX}</aSelect>;
};
