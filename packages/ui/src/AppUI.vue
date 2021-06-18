<template>
  <div class="flex horizon">
    <ul class="menu">
      <li v-for="route in routes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
    <div class="flex1 view">
      <router-view />
    </div>
  </div>
</template>

<script>
import { routes } from "./router";
export default {
  data() {
    return {
      routes,
    };
  },
};
</script>
<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
