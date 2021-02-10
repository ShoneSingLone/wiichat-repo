<template>
  <div class="flex vertical">
    <div className="gutter16" />
    <xBtn>
      <template #default="{ id }"> {{ currentIndex }}{{ id }} </template>
    </xBtn>
    <input v-model="text" />
    <div>
      <xBtn
        :configs="xBtnConfigs"
        v-for="(item, index) in items"
        :key="index"
        @click="setCurrentIndex(index)"
        >{{ item }}</xBtn
      >
      <xBtn
        :configs="{ text: item }"
        data-is="btn"
        class="margin4 flex"
        style="color: white"
        v-for="(item, index) in items"
        :key="index"
        @click="setCurrentIndex(index)"
      />
    </div>
    <div className="gutter16" />
    <div>
      <button type="button" className="btn ripple">native btn</button>
      <div className="gutter16" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  methods: {
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
        attrs: { "data-is": "btn", class: "margin4", style: { color: "white" } },
      },
    };
  },
};
</script>
