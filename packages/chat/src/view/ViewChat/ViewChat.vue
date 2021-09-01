<template>
  <div class="flex1 view-chat-wrapper">
    <!-- https://b2nil.github.io/taro-ui-vue3/docs/virtualscroll.html -->
    <div class="container view-chat-content-wrapper">
      <van-list v-model:loading="APP.contactState.loading" :finished="APP.contactState.finished" finished-text="没有更多了" @load="APP.onLoad">
        <van-swipe-cell v-for="item in APP.contactState.list" :key="item">
          <UserCard :item="item" @click="showDetail(item)" />
          <template #right>
            <div class="options-wrapper flex vertical jcsb middle jcc aic">
              <span />
              <van-button plain size="mini" text="置顶" icon="back-top" class="option-btn shadow"/>
              <span />
              <van-button plain icon="delete-o" size="mini" text="删除" class="option-btn shadow"/>
              <span />
            </div>
          </template>
        </van-swipe-cell>
      </van-list>
    </div>
    <div class="container view-chat-content-detaile-wrapper" v-if="isShowDetail" >
      <van-list v-model:loading="APP.contactState.loading" :finished="APP.contactState.finished" finished-text="没有更多了" @load="APP.onLoad">
        <ViewChatDetail />
      </van-list>
    </div>
  </div>
</template>

<script>
import UserCard from "../../components/UserCard.vue";
import ViewChatDetail from "./ViewChatDetail.vue";
import _ from "lodash";

export default {
  components: { ViewChatDetail, UserCard },
  data() {
    return {
      msgList: [{}],
      isShowDetail: false,
    };
  },
  inject: ["APP"],
  computed: {
    isShowDetail() {
      if (Boolean(this.$route.query.isShowDetail)) return true;
      return false;
    },
  },
  methods: {
    showDetail(item) {
      this.$router.push({
        path: this.$route.path,
        query: _.merge({}, this.$route.query, { isShowDetail: true }),
      });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index: 1;
}
.view-chat-content-detaile-wrapper{
  background-color: red;
}
.view-chat-wrapper{
  height:1px;
  position: relative;
}
</style>
