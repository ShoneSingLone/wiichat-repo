//@ts-nocheck
import _ from "lodash";

type option = {
    label: string;
    value: any;
    style?: any;
};

interface i_configs {
    label: string;
    prop: string;

    renderTips?(): JSX.Element;
}

interface i_select {
    options?: Array<option>;
}

const configsItemBase = {
	disabled: false,
};

function propAndConfigs(configs) {
	return {[configs.prop]: configs};
}

export const defineItem = {
	render(configs: option) {
		return propAndConfigs(_.merge(
			{
				type: "render",
			},
			configs
		));
	},
	normal(configs: option) {
		return propAndConfigs(_.merge({}, configsItemBase, configs));
	},
	number(configs: option) {
		return propAndConfigs(_.merge(
			{
				type: "number",
			},
			configsItemBase,
			configs
		));
	},
	switch(configs: option & i_select) {
		const _configs = _.merge(
			{
				type: "switch",
			},
			configsItemBase,
			configs
		);
		return propAndConfigs(_configs);
	},
	select(configs: option & i_select) {
		const _configs = _.merge(
			{
				type: "select",
				options: [],
			},
			configsItemBase,
			configs
		);
		return propAndConfigs(_configs);
	},
	radioGroup(configs: option & i_select) {
		const _configs = _.merge(
			{
				type: "radioGroup",
				options: [],
			},
			configs
		);
		return propAndConfigs(_configs);
	},
	textArea(configs: option) {
		const _configs = _.merge(
			{
				props: {},
				attrs: {
					rows: configs.rows || 4,
					type: "textarea",
				},
			},
			configs
		);
		return propAndConfigs(_configs);
	},
};
