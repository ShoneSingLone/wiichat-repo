<template></template>
<script lang="jsx">
import { defineComponent, reactive, toRaw } from "vue";
import FormItem from "../../components/form/items/index.vue";
export default defineComponent({
  components: { iii: FormItem },
  render(h) {
    return (
      <>
        <AInput />
        <h1>asdfasdf</h1>
      </>
    );
  },
});
</script>

<style></style>
