<template>
  <div class="flex vertical home-wrapper wrapper">
    <div class="content-wrapper flex1">
      <div class="content-item flex middle elevation1" v-for="i in 20">
        <div class="avatar elevation1" />
        <div class="content flex1">
          <div>content</div>
        </div>
        <div class="info">red-point</div>
      </div>
    </div>
    <div class="nav-bar elevation6 ripple wrapper" :style="navStyle">
      <xIcon icon="" class="ripple icon" @click="toggleNavbar" />
      <span>标题</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  computed: {
    navStyle() {
      return this.isFoldNav ? { height: "32px" } : { height: "60px" };
    },
  },
  data() {
    return {
      isFoldNav: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.isFoldNav = !this.isFoldNav;
    },
    setCurrentIndex(index) {
      this.currentIndex = index;
      this.text = this.items[this.currentIndex];
    },
  },
  watch: {
    text(text) {
      this.items[this.currentIndex] = text;
    },
  },
  data() {
    return {
      text: "",
      currentIndex: 0,
      items: [1, 2, 3],
      xBtnConfigs: {
        attrs: {
          "data-is": "btn",
          class: "margin4 rect",
          style: { color: "white" },
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.large {
  height: 500px;
  width: 200px;
}
.rect {
  width: 500px;
  height: 200px;
}
.nav-bar {
  text-align: left;
  height: 40px;
  background-color: white;
  .icon {
    width: 32px;
    position: relative;
    &::before {
      content: " ";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(0, 255, 34, 0.164);
      z-index: 1;
    }
  }
}
.home-wrapper {
  height: 100%;
}
.content-wrapper {
  height: 1px;
  overflow: auto;
  .avatar {
    width: 40px;
    height: 40px;
    background: url(https://ae01.alicdn.com/kf/HTB1cuNMbECF3KVjSZJn762nHFXar.png);
    border-radius: 50%;
    overflow: hidden;
  }
}
.content-item {
  margin: 8px;
  padding: 8px;
}
</style>
