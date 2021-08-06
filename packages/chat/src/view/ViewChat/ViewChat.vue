<template>
  <div class="container flex1">
    <!-- https://b2nil.github.io/taro-ui-vue3/docs/virtualscroll.html -->
    <van-list
      v-if="!isShowDetail"
      v-model:loading="APP.contactState.loading"
      :finished="APP.contactState.finished"
      finished-text="没有更多了"
      @load="APP.onLoad"
    >
      <van-swipe-cell v-for="item in APP.contactState.list" :key="item">
        <UserCard :item="item" @click="showDetail(item)" />
        <template #right>
          <div class="options-wrapper flex vertical jcsb middle jcc aic">
            <span />
            <van-button
              plain
              size="mini"
              text="置顶"
              icon="back-top"
              class="option-btn shadow"
            />
            <span />
            <van-button
              plain
              icon="delete-o"
              size="mini"
              text="删除"
              class="option-btn shadow"
            />
            <span />
          </div>
        </template>
      </van-swipe-cell>
    </van-list>
    <van-list
      v-if="isShowDetail"
      v-model:loading="APP.contactState.loading"
      :finished="APP.contactState.finished"
      finished-text="没有更多了"
      @load="APP.onLoad"
    >
      <van-swipe-cell v-for="item in APP.contactState.list" :key="item">
        <template #right>
          <div class="options-wrapper flex vertical jcsb middle jcc aic">
            <span />
            <van-button
              plain
              size="mini"
              text="置顶"
              icon="back-top"
              class="option-btn shadow"
            />
            <span />
            <van-button
              plain
              icon="delete-o"
              size="mini"
              text="删除"
              class="option-btn shadow"
            />
            <span />
          </div>
        </template>
      </van-swipe-cell>
    </van-list>
  </div>
</template>

<script>
import UserCard from "../../components/UserCard.vue";

export default {
  created() {
    console.log("this.APP", this.APP);
  },
  components: { UserCard },
  data() {
    return {
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