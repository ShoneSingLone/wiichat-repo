<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import style from "./assets/scss/variables.scss";
import { setThemeColor } from "@ventose/ui/utils/common";

export default defineComponent({
  beforeCreate() {
    setThemeColor(style.primaryColor);
  },
});
</script>
