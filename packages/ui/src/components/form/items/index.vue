<template></template>

<script lang="jsx">
import { defineComponent, reactive, toRaw } from "vue";

export default defineComponent({
  props: ["value"],
  emits: ["update:value"],
  setup(props, { attrs, slots, emit }) {
    /*      <a-form-item label="Activity zone">
              <a-select v-model:value="formState.region" placeholder="please select your zone">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="Activity time">
              <a-date-picker v-model:value="formState.date1" show-time type="date" placeholder="Pick a date" style="width: 100%" />
            </a-form-item>
            <a-form-item label="Instant delivery">
              <a-switch v-model:checked="formState.delivery"/>
            </a-form-item>
            <a-form-item label="Activity type">
              <a-checkbox-group v-model:value="formState.type">
                <a-checkbox value="1" name="type">Online</a-checkbox>
                <a-checkbox value="2" name="type">Promotion</a-checkbox>
                <a-checkbox value="3" name="type">Offline</a-checkbox>
              </a-checkbox-group>
            </a-form-item>
            <a-form-item label="Resources">
              <a-radio-group v-model:value="formState.resource">
                <a-radio value="1">Sponsor</a-radio>
                <a-radio value="2">Venue</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="Activity form">
              <a-input v-model:value="formState.desc" type="textarea"/>
            </a-form-item>
*/
    return () => {
      const properties = {
        placeholder: "Basic usage",
        value: props.value,
        "onUpdate:value": (e) => emit("update:value", e),
      };
      const a = <AInput {...properties} />;
      console.log("🚀 ~ file: index.vue ~ line 46 ~ return ~ a", a.type.render.toString());
      
      return a;
    };
  },
});
</script>

<style></style>
