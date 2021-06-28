<template>
  <pre>{{ JSON.stringify(configs.selectConfigs, null, 2) }} </pre>
  <xFormItem v-model:value="inputValue" v-model:configs="configs[prop]" v-for="prop in ['inputConfigs', 'selectConfigsFixed', 'selectConfigs']" />
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
                  {value: 'shanghai', label: 'async'},
                ])
              }, 3000)
            })
          },
        }
      }, 3000);

    }, 6000);
  },
  data() {
    const inputConfigs= {
        attrs: { style: 'width:400px', class: 'test-class-in-attrs text-form-item' },
      };
      const selectConfigsFixed= {
        itemType: 'select',
        options: [{value: 'shanghai', label: '上海'}, {value: 'beijing', label: '北京'}],
      };
      const selectConfigs= {
        itemType: 'select',
        optionsFromDict: [
          {value: 'shanghai', label: '上海'},
          {value: 'beijing', label: '北京'},
        ],
      };
      const configs={ inputConfigs, selectConfigsFixed, selectConfigs };
    return {
      inputValue: "init",
      configs
    }
  },
});
</script>

<style>
.text-form-item {
  color: red;
}
</style>
