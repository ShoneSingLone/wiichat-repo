<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import style from "./assets/scss/variables.scss";
import { setThemeColor } from "@/utils/common";

export default defineComponent({
  beforeCreate() {
    setThemeColor(style.primaryColor);
  },
});
</script>

<style lang="scss" src="./assets/scss/common.scss">
</style>
