<template>
  <button @click="handleClickButton" data-ventose-tips="tips content">
    open
  </button>
</template>

<script>
export default {
  methods: {
    handleClickButton() {
      this.layer.open();
    },
  },
};
</script>

<style></style>
