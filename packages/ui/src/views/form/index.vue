<template>
  <xFormItem v-model:value="inputValue" v-model:configs="configs[prop]" v-for="prop in ['inputConfigs', 'selectConfigsFixed', 'selectConfigs']" />

  <a-form ref="formRef"
          :model="formState"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol">
    <a-form-item ref="name" label="Activity name" name="name">
      <xFormItem v-model:value="formState.name" v-model:configs="configs.inputConfigs"/>
    </a-form-item>
    <a-form-item label="Activity zone" name="region">
      <xFormItem v-model:value="formState.name" v-model:configs="configs.selectConfigsFixed"/>
    </a-form-item>
    <a-form-item label="Instant delivery" name="delivery">
      <a-switch v-model:checked="formState.delivery"/>
    </a-form-item>
    <a-form-item label="Activity type" name="type">
      <a-checkbox-group v-model:value="formState.type">
        <a-checkbox value="1" name="type">Online</a-checkbox>
        <a-checkbox value="2" name="type">Promotion</a-checkbox>
        <a-checkbox value="3" name="type">Offline</a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="Resources" name="resource">
      <a-radio-group v-model:value="formState.resource">
        <a-radio value="1">Sponsor</a-radio>
        <a-radio value="2">Venue</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Activity form" name="desc">
      <a-textarea v-model:value="formState.desc"/>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>

</template>

<script lang="jsx">
import {defineComponent, reactive, toRaw} from "vue";
import _ from "lodash"

export default defineComponent({
  name: 'ViewForm',
  mounted() {
    setTimeout(() => {
      this.configs.selectConfigs = _.merge(this.configs.selectConfigs, {
        options: [
          {value: 'new', label: 'new'},
        ], needUpdateOptions: true
      })
      setTimeout(() => {
        this.configs.selectConfigs = {
          itemType: 'select',
          needUpdateOptions: true,
          optionsFromAsyncFn() {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve([
                  {value: 'shanghai', label: '使用async加载数据'},
                ])
              }, 3000)
            })
          },
        }
      }, 3000);

    }, 6000);
  },
  data() {
    const inputConfigs = {
      attrs: {style: 'width:400px', class: 'test-class-in-attrs text-form-item'},
    };
    const selectConfigsFixed = {
      itemType: 'select',
      attrs: {placeholder: 'please select your zone'},
      options: [{value: 'shanghai', label: '上海'}, {value: 'beijing', label: '北京'}],
    };
    const selectConfigs = {
      itemType: 'select',
      optionsFromDict: [
        {value: 'shanghai', label: '上海'},
        {value: 'beijing', label: '北京'},
      ],
    };

    const configs = {inputConfigs, selectConfigsFixed, selectConfigs};
    const formState = {
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    };

    return {
      inputValue: "init",
      configs,
      formState
    }
  },
});
</script>

<style>
.text-form-item {
  color: red;
}
</style>
