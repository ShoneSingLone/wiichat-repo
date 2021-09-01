<template>
  <van-popover
    class="shadow more-tool-wrapper"
    v-model:show="showPopover"
    :actions="actions"
    @select="handleClick($event)"
    placement="bottom-end"
    :offset="[-12, 4]"
  >
    <van-grid
      square
      clickable
      :border="false"
      :column-num="columnNum"
      style="width:240px"
    >
      <van-grid-item
        v-for="(i, index) in options"
        :key="index"
        :text="i.text"
        :icon="i.icon"
        @click="showPopover = true"
      />
    </van-grid>
    <template #reference>
      <van-button
        plain
        round
        size="small"
        icon="add-o"
        class="shadow mr10"
        @click="handleClick(null, 'search')"
      />
    </template>
  </van-popover>
</template>

<script>
export default {
  methods: {
    handleClick() {},
  },
  computed: {
    columnNum() {
      if (this.options.length < 3) {
        return this.options.length;
      }
      return 3;
    },
  },
  data() {
    return {
      options: [
        { icon: "notes-o", text: "添加联系人" },
        { icon: "scan", text: "扫一扫" },
      ],
      showPopover: false,
    };
  },
};
</script>

<style>
</style>