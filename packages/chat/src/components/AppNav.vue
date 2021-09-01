<template>
  <div class="van-nav-bar__content">
    <div class="van-nav-bar__left"></div>
    <div
        class="van-nav-bar__title van-ellipsis"
        style="flex: 1; text-align: left"
    ></div>
    <div>
      <VanButton plain round size="small" icon="search" class="shadow mr10" @click="handleClick(null, 'search')"/>
      <ButtonMore/>
    </div>
  </div>
</template>

<script>
import ButtonMore from "./ButtonMore.vue";

export default {
  components: {ButtonMore}
}
</script>

<style>

</style>
