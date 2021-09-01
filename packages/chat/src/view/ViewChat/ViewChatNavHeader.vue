<template>
  <div class="van-nav-bar__content">
    <div class="van-nav-bar__left">back</div>
    <div
        class="van-nav-bar__title van-ellipsis"
        style="flex: 1; text-align: left"
    ></div>
    <div>
      <ViewChatNavHeaderMore/>
    </div>
  </div>
</template>

<script>
import ViewChatNavHeaderMore from "./ViewChatNavHeaderMore.vue";

export default {
  components: {ViewChatNavHeaderMore}
}
</script>

<style>

</style>
