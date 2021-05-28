<template>
  <div class="">
    <ACard title="Default size card" style="width: 300px">
      <template #extra><a href="#">more</a></template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </ACard>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>
