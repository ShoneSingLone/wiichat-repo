<template>
  <div class="flex vertical middle center height100">
    <ACard>
      <audio controls :src="audioSrc">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </ACard>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "@ventose/ui/src/styles/common.scss";

export default defineComponent({
  data() {
    return {
      audioSrc: `https://www.ventose.xyz/static/media/demo1.m4a`,
    };
  },
});
</script>


<style>
</style>
