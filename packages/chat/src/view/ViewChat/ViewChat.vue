<template>
  <!-- https://b2nil.github.io/taro-ui-vue3/docs/virtualscroll.html -->
  <van-list
    v-model:loading="APP.contactState.loading"
    :finished="APP.contactState.finished"
    finished-text="没有更多了"
    @load="APP.onLoad"
  >
    <van-swipe-cell v-for="item in APP.contactState.list" :key="item">
      <UserCard :item="item" />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </van-list>
</template>

<script>
import UserCard from "../../components/UserCard.vue";

export default {
  components: { UserCard },
  inject: ["APP"],
};
</script>

<style>
</style>