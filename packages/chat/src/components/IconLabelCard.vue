<template>
  <div class="van-card card">
    <div class="van-card__header">
      <a class="van-card__thumb flex horizon aic">
        <div class="van-image shadow">
          <img :src="avatar" class="van-image__img" style="object-fit: cover" />
          <img ref="img" src="./avatar.jpg" class="van-image__img__hidden" />
        </div>
      </a>
      <div class="van-card__content">
        <div>
          <div class="van-card__title van-multi-ellipsis--l2">
            {{ item.nickName }}
          </div>
          <div class="van-card__desc van-ellipsis">{{ item.updateTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.avatar) {
      this.avatar = this.$refs.img.src;
    }
  },
  created() {
    const unwatchItem = this.$watch(
      "item",
      (item) => {
        if (item.avatar) {
          var img = new Image();
          img.src = item.avatar;
          const destroy = () => {
            img.onload = null;
            img.onerror = null;
            img = null;
            unwatchItem();
          };
          img.onload = () => {
            this.avatar = item.avatar;
            destroy();
          };
          img.onerror = destroy;
        }
      },
      { immediate: true }
    );
  },
  data() {
    return {
      avatar: "",
    };
  },
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.van-image__img__hidden {
  width: 0;
  height: 0;
  display: none;
}

.van-image {
  width: 88px;
  height: 88px;
}

.van-card__content {
  > div {
    padding: 8px 4px;
  }
}

.van-card.card {
  padding: 0;
  margin: 1rem 1rem 0 1rem;
}
</style>