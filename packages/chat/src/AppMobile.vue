<template>
  <component :is="currentView" />
</template>

<script>
import Login from "./view/mobile/Login.vue";

export const routeMeta = {
  login: {
    name: "login",
    path: "/login",
  },
};
export default {
  components: { Login },
  computed: {
    currentView() {
      return this.$route.query.view || routeMeta.login.name;
    },
  },
};
</script>

<style>
</style>
