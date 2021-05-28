<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import style from "./assets/scss/variables.scss";
import { setThemeColor } from "@ventose/ui/src/utils/common";

export default defineComponent({
  beforeCreate() {
    setThemeColor(style.primaryColor);
  },
});
</script>
