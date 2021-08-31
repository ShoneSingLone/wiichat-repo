<template>
  <Login />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "./views/user/Login.vue";

export default defineComponent({

  name: "App",
  mounted() {
    console.log("this.$t('name')",this.$t('name'));
  },
  components: {
    Login,
  },
});
</script>

<style lang="scss" scope></style>
