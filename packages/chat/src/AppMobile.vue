<template>
  <div class="flex vertical app-wrapper">
    <div class="container flex1">
      {{ currentActiveNavItem }}
      hehe
    </div>

    <nut-tabbar @tab-switch="tabSwitch" v-model:visible="currentActiveNavItem">
      <nut-tabbar-item
        :tab-title="i.title"
        :icon="i.icon"
        v-for="i in navItems"
        :key="i.icon"
      ></nut-tabbar-item>
    </nut-tabbar>
  </div>

  <!-- <component :is="currentView" /> -->
</template>

<script>
import { Tabbar } from "@nutui/nutui"
export const routeMeta = {
  login: {
    name: "login",
    path: "/login",
  },
}
export default {
  components: {
    Tabbar,
  },
  data() {
    return {
      currentActiveNavItem: 1,
      navItems: [
        { title: "首页", icon: "home" },
        { title: "分类", icon: "category" },
        { title: "发现", icon: "find" },
        { title: "购物车", icon: "cart" },
        { title: "我的", icon: "my" },
      ],
    }
  },
  methods: {
    tabSwitch(item, index) {
      console.log(
        "🚀 ~ file: AppMobile.vue ~ line 40 ~ tabSwitch ~ item, index",
        item,
        index
      )
    },
  },
  computed: {
    currentView() {
      return this.$route.query.view || routeMeta.login.name
    },
  },
}
</script>
<style lang="scss">
.app-wrapper {
  height: 100vh;
}
</style>
