<template>
  <div class="flex vertical">
    <div className="gutter16" />
    <h1>App List</h1>
    <xBtn
      v-for="route in routes_accessable"
      :key="route.path"
      :configs="xBtnConfigs"
      @click="goTo(route.path)"
    >
      {{ route.name }}
    </xBtn>
  </div>
</template>
<script>
import { routes_accessable } from "@/router";

export default {
  name: "NotFound",
  methods: {
    goTo(path) {
      this.$router.push({ path });
    },
  },
  data() {
    return {
      routes_accessable,
      xBtnConfigs: {
        type: "outline",
        attrs: {
          class: "route",
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.route {
  margin-top: 16px;
}
</style>
