<template>
  <teleport to="body">
    <div
      v-show="isShow"
      :class="['ripple', { 'is-active': isShow }]"
      @animationend="handleAnimationend"
      :style="rippleStyle"
    >
      <div class="ripple__circle" :style="circleStyle"></div>
    </div>
  </teleport>
</template>

<script>
import { defineComponent, createApp } from "vue";
import $ from "jquery";
export const $body = $("body");
export const idString = "x-relay-dom";
export function ensureRelayDom() {
  const $rippleWrapper = $(`#${idString}`);
  if ($rippleWrapper?.length < 1) {
    $("<div/>", { id: idString }).css("display", "none").appendTo($body);
  }
}

export function installXRippleToBody(xRipple) {
  if (installXRippleToBody.done) return;
  $body.css("position", "relative");
  ensureRelayDom();
  createApp(xRipple).mount(`#${idString}`);
  installXRippleToBody.done = true;
}

export function watchClickRipple(rippleVM) {
  if (watchClickRipple.done) return;
  $body.on("click", ".ripple", function ($e) {
    if ($e.currentTarget !== $e.target) return;
    /* 获取点击的dom 获取位置 获取rect */
    /* 添加先同位置相同大小的ripple元素 */
    /* ripple元素波纹效果 */
    /* 移除 */

    const { clientX, clientY, pageX, pageY, offsetX, offsetY } = $e;
    console.log( clientX, clientY, pageX, pageY, offsetX, offsetY );
    
    const { width, height, top, left } = this.getBoundingClientRect();
    console.log( width, height, top, left );
    rippleVM.rippleStyle = {
      top: 0,
      // top: `${pageY - clientY + top}px`,
      left: `${pageX - clientX + left}px`,
      width: `${width}px`,
      height: `${height}px`,
    };
    const length = width > height ? width : height;
    rippleVM.circleStyle = {
      top: `${offsetY - length / 2}px`,
      left: `${offsetX - length / 2}px`,
      width: `${length}px`,
      height: `${length}px`,
    };
    rippleVM.isShow = true;
  });
  watchClickRipple.done = true;
}

export default defineComponent({
  name: "xRipple",
  data() {
    return {
      isShow: false,
      circleStyle: {},
      rippleStyle: {},
    };
  },
  mounted() {
    watchClickRipple(this);
  },
  methods: {
    handleAnimationend() {
      this.isShow = false;
    },
  },
});
</script>

<style scoped>
.ripple {
  position: absolute;
  z-index: 1;
  overflow: hidden;
  background: transparent;
  border-radius: 4px;
}

.ripple__circle {
  position: absolute;
  transform-origin: center center;
  opacity: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  background: rgba(180, 180, 180, 0.5);
}

.ripple.is-active .ripple__circle {
  animation: a-ripple .4s ease-in;
}

@keyframes a-ripple {
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0.5;
  }

  55% {
    opacity: 1;
    transform: scale(1.2);
  }

  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>