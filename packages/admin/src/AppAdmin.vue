<template>
  <Login class="login" />
</template>
<script lang="tsx">
import { defineComponent } from "vue";
// import Login from "./components/Login";
import Login from "./Login.vue"

export default defineComponent({
  name: "AppAdmin",
  components: { Login },
});
</script>

<style></style>
