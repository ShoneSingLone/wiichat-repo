<template>
  <div>
    currentCard: {{ currentCard }}
    <xFormItem
      v-model:value="currentCard"
      v-model:configs="configsCurrentCard"
    />
    <aCard>
      <xFormItem
        v-model:value="inputValue"
        v-model:configs="configs[prop]"
        v-for="prop in ['inputConfigs', 'selectConfigsFixed', 'selectConfigs']"
      />
    </aCard>
    <div class="mt10" />
    <pre style="text-align: left"
      >{{ JSON.stringify(configsXForm.form, null, 2) }}
    </pre>
    <xForm :configs="configsXForm" />
    <div class="mt10" />
    <aCard>
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item ref="name" label="Activity name" name="name">
          <xFormItem
            v-model:value="formState.name"
            v-model:configs="configs.inputConfigs"
          />
        </a-form-item>
        <a-form-item label="Activity zone" name="region">
          <xFormItem
            v-model:value="formState.name"
            v-model:configs="configs.selectConfigsFixed"
          />
        </a-form-item>
      </a-form>
    </aCard>
  </div>
</template>

<script lang="jsx">
import { defineComponent, reactive, toRaw } from "vue";
import _ from "lodash";
import { defineItem } from "../../components/form/xForm.define";

export default defineComponent({
  name: "ViewForm",
  mounted() {
    setTimeout(() => {
      this.configs.selectConfigs = _.merge(this.configs.selectConfigs, {
        options: [{ value: "new", label: "new" }],
        needUpdateOptions: true,
      });
      setTimeout(() => {
        this.configs.selectConfigs = {
          itemType: "select",
          needUpdateOptions: true,
          optionsFromAsyncFn() {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve([{ value: "shanghai", label: "使用async加载数据" }]);
              }, 3000);
            });
          },
        };
      }, 3000);
    }, 6000);
  },
  methods: {},
  data() {
    const inputConfigs = {
      attrs: {
        style: "width:400px",
        class: "test-class-in-attrs text-form-item",
      },
    };
    const selectConfigsFixed = {
      itemType: "select",
      attrs: { placeholder: "please select your zone" },
      options: [
        { value: "shanghai", label: "上海" },
        { value: "beijing", label: "北京" },
      ],
    };
    const selectConfigs = {
      itemType: "select",
      optionsFromDict: [
        { value: "shanghai", label: "上海" },
        { value: "beijing", label: "北京" },
      ],
    };

    const configs = { inputConfigs, selectConfigsFixed, selectConfigs };
    const formState = {
      name: "",
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    };

    return {
      currentCard: "",
      configsCurrentCard: defineItem.radioGroup({
        options: ["card1", "card2", "card3"],
      }),
      configsXForm: {
        form: { name: "" },
        items: {
          ...defineItem.normal({ label: "名字", prop: "name" }),
          ...defineItem.select({
            label: "性别",
            prop: "gender",
            options: ["man", "female"],
          }),
        },
      },
      inputValue: "init",
      configs,
      formState,
    };
  },
  watch: {
    configsXForm(con) {
      console.log("🚀:", "con", JSON.stringify(con, null, 2));
    },
  },
});
</script>

<style>
.text-form-item {
  color: red;
}
</style>
