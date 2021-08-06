<template>
  <div class="container flex1">ViewApplication</div>
</template>

<script>
import UserCard from "../../components/UserCard.vue";

export default {
  components: { UserCard },
  inject: ["APP"],
};
</script>

<style scoped>
.options-wrapper {
  height: 100%;
  width: 100%;
}

.van-button--mini + .van-button--mini {
  margin-left: 0;
}
.option-btn {
  width: 100%;
}
</style>