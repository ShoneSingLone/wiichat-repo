<template>
  <div class="main">
    <div class="vui__board flexbox">
      <div class="flex1 flexbox">
        <van-button type="primary" block>块级元素</van-button>
        <h1>右上角按钮</h1>
        <h1>侧边栏</h1>
        <h1>中间栏</h1>
        <h1>主内容区</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { app as Music } from "@ventose/music-player/dist/music-player.es.js";
import $ from "jquery";

export default defineComponent({
  name: "",
  setup(props) {
    ((id) => {
      const idSelector = `#${id}`;
      if (!Music.isMounted) {
        $("<div/>", { id }).appendTo($("body"));
        Music.mount(idSelector);
        Music.isMounted = true;
      }
    })("app-music-id");
  },
});
</script>

<style>
</style>
