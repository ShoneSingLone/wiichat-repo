<template>
  <div class="flex vertical middle center height100">
    <ACard>
      <div id="player">
        <div id="playBtn" class="button playBtn"></div>
        <div id="stopBtn" class="button stopBtn"></div>
        <div id="labels">
          <label id="song">Song: <strong>FRAGMENT</strong></label
          ><br />
          <label id="artist">Artist: <strong>ShoneSingLone</strong></label
          ><br /><br />
          <label id="loading">Waiting...</label>
        </div>
        <div id="track">
          <div id="progress"></div>
          <div id="thumb"></div>
        </div>
      </div>
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
      audioSrc:`https://www.ventose.xyz/static/media/demo1.m4a`
    };
  },
});
</script>
