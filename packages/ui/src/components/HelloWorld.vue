<template>
  <aButton type="button" @click="state.count++" class="ripple">
    count is: {{ state.count }}
  </aButton>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
