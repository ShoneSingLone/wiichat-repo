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
export type t_item_render = () => JSX.Element;

export interface i_form_item<T> {
  input: T;
  select: T;
  render: T;
  number: T;
  switch: T;
  radioGroup: T;
  textarea: T;
}

export const ITEM_TYPE: i_form_item<string> = {
  input: "input",
  select: "select",
  render: "render",
  number: "number",
  switch: "switch",
  radioGroup: "radioGroup",
  textarea: "textarea",
};

const configsItemBase = {
  disabled: false,
};

const propAndConfigsOrOnlyConfigs = (configs) => {
  if (configs.prop) {
    return { [configs.prop]: configs };
  } else {
    return configs;
  }
};

export const defineItem = {
  render(configs: option) {
    return propAndConfigsOrOnlyConfigs(
      _.merge(
        {
          itemType: ITEM_TYPE.render,
        },
        configs
      )
    );
  },
  normal(configs: option) {
    return propAndConfigsOrOnlyConfigs(
      _.merge({ itemType: ITEM_TYPE.input }, configsItemBase, configs)
    );
  },
  number(configs: option) {
    return propAndConfigsOrOnlyConfigs(
      _.merge(
        {
          itemType: ITEM_TYPE.number,
        },
        configsItemBase,
        configs
      )
    );
  },
  switch(configs: option & i_select) {
    const _configs = _.merge(
      {
        itemType: ITEM_TYPE.switch,
      },
      configsItemBase,
      configs
    );
    return propAndConfigsOrOnlyConfigs(_configs);
  },
  select(configs: option & i_select) {
    const _configs = _.merge(
      {
        itemType: ITEM_TYPE.select,
        options: [],
      },
      configsItemBase,
      configs
    );
    return propAndConfigsOrOnlyConfigs(_configs);
  },
  radioGroup(configs: option & i_select) {
    const _configs = _.merge(
      {
        itemType: ITEM_TYPE.radioGroup,
        options: [],
      },
      configs
    );
    return propAndConfigsOrOnlyConfigs(_configs);
  },
  textArea(configs: option) {
    const _configs = _.merge(
      {
        props: {},
        attrs: {
          rows: configs.rows || 4,
          itemType: ITEM_TYPE.textarea,
        },
      },
      configs
    );
    return propAndConfigsOrOnlyConfigs(_configs);
  },
};
