<template>
  <div>item</div>
</template>

<script>

export default {
  data() {
    return {
      msgList: [{}],
      isShowDetail: false,
    };
  },
  inject: ["APP"],
  methods: {
    showDetail(item) {
      this.isShowDetail = true;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 10px 0;
}

.options-wrapper {
  border-radius: 12px;
  height: 100%;
  width: 100%;
}

.van-button--mini + .van-button--mini {
  margin-left: 0;
}

.option-btn {
  width: 100%;
}

.avatar {
  margin: 1rem;
  background-position: left center;
  background-size: contain;
  background-repeat: no-repeat;

  & + .info {
    font-size: 12px;
    color: #1d19197c;
  }
}
</style>
