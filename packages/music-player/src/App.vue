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
#player {
  width: 451px;
  height: 101px;
  background-image: url("./assets/player.png");

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

#blocker {
  background-color: #f00;
  opacity: 0;
  width: 451px;
  height: 101px;
  cursor: pointer;
}

#player DIV {
  position: absolute;
}

.button {
  width: 64px;
  height: 64px;
  top: 31px;
}

#playBtn {
  left: 324px;
}

.playBtn {
  background-image: url("./assets/buttonPlay.png");
}

.playBtn:hover {
  background-image: url("./assets/buttonPlayHover.png");
}

.pauseBtn {
  background-image: url("./assets/buttonPause.png");
}

.pauseBtn:hover {
  background-image: url("./assets/buttonPauseHover.png");
}

#stopBtn {
  left: 387px;
}

.stopBtn {
  background-image: url("./assets/buttonStop.png");
}

.stopBtn:hover {
  background-image: url("./assets/buttonStopHover.png");
}

#labels {
  top: 35px;
  left: 37px;
  position: absolute;
}

#player LABEL {
  color: #336666;
}

#song {
}

#assetsist {
  top: 52px;
  left: 37px;
}

#track {
  width: 262px;
  height: 5px;
  top: 78px;
  left: 40px;
  background-image: url("./assets/scubberBar.png");
}

#thumb {
  cursor: pointer;
  background-image: url("./assets/scrubberPlayhead.png");
  width: 16px;
  height: 16px;
  top: -5px;
}

.disabled {
  opacity: 0.5;
}
</style>
