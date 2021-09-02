<template></template>
<script>
import { app as Music } from "@ventose/music-player";
import $ from "jquery";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
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