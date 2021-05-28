<template>
  <AButton>{{text}}</AButton>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return { text: "button" };
  },
});
</script>
