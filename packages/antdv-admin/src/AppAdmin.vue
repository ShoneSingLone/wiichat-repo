<template>
  <Login />
</template>

<script>
import { defineComponent } from "vue";
import Login from "./views/user/Login.vue";
export default defineComponent({
  name: "App",
  components: { Login },
});
</script>

<style lang="scss" scope></style>
