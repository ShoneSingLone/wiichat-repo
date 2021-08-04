<template>
  <div class="flex vertical app-wrapper">
    <div class="van-nav-bar van-hairline--bottom">
      <div class="van-nav-bar__content">
        <div class="van-nav-bar__left"></div>
        <div class="van-nav-bar__title van-ellipsis">{{ viewTitle }}</div>
        <div class="">
          <van-icon
            name="search"
            size="18"
            class="mr10"
            @click="handleClick(null, 'search')"
          />
          <van-popover
            v-model:show="showPopover"
            :actions="actions"
            @select="handleClick($event)"
            placement="bottom-end"
          >
            <van-grid
              square
              clickable
              :border="false"
              column-num="3"
              style="width: 240px"
            >
              <van-grid-item
                v-for="i in 6"
                :key="i"
                text="选项"
                icon="photo-o"
                @click="showPopover = false"
              />
            </van-grid>
            <template #reference>
              <van-icon name="add-o" size="18" class="mr10" />
            </template>
          </van-popover>
        </div>
      </div>
    </div>
    <div class="container flex1">
      <van-list
        v-model:loading="contactState.loading"
        :finished="contactState.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div
          class="flex horizon jcsb aic card"
          v-for="item in contactState.list"
          :key="item"
        >
          <div class="avatar" :style="getBGImg(item)"></div>
          <div class="info">
            <div>{{ item.nickName }}</div>
            <div>{{ item.updateTime }}</div>
          </div>
        </div>
      </van-list>
    </div>

    <van-tabbar v-model="currentActiveNavItem">
      <van-tabbar-item
        @click.native="tabSwitch(navItems[prop])"
        v-for="prop in navOrders"
        :key="prop"
        :name="prop"
        :icon="navItems[prop].icon"
        :badge="navItems[prop].badge"
        >{{ navItems[prop].name }}</van-tabbar-item
      >
    </van-tabbar>
  </div>

  <!-- <component :is="currentView" /> -->
</template>

<script>
import { Toast } from "vant";
export const routeMeta = {
  login: {
    name: "login",
    path: "/login",
  },
};
export default {
  data() {
    const navItems = {
      chat: { prop: "chat", name: "聊天", icon: "chat-o", badge: 10 },
      friends: { prop: "friends", name: "联系人", icon: "friends-o" },
      search: { prop: "search", name: "应用", icon: "bag-o" },
      contact: { prop: "contact", name: "我的", icon: "contact" },
    };
    const navOrders = ["chat", "friends", "search", "contact"];
    const actions = [
      { text: "选项一" },
      { text: "选项二" },
      { text: "选项三" },
    ];
    return {
      viewTitle: "WiiChat",
      showPopover: false,
      currentActiveNavItem: navOrders[0],
      navItems,
      navOrders,
      actions,
      contactState: {
        list: [],
        loading: false,
        finished: false,
      },
    };
  },
  watch: {
    "$route.query"(query) {
      console.log("🚀 ~ file: AppMobile.vue ~ line 46 ~ query", query);
    },
  },
  methods: {
    getBGImg(item) {
      return {
        "background-image": `url(${item.avatar})`,
      };
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.contactState.list.push({
            avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            nickName: "ShoneSingLone",
            updateTime: "2021年8月4日21:03:07",
          });
        }

        // 加载状态结束
        this.contactState.loading = false;

        // 数据全部加载完成
        if (this.contactState.list.length >= 40) {
          this.contactState.finished = true;
        }
      }, 1000);
    },
    handleClick(type) {
      console.log(
        "🚀 ~ file: AppMobile.vue ~ line 68 ~ handleClick ~ type",
        type
      );
    },
    tabSwitch(item) {
      Toast(`标签 ${item.name}`);
      this.$router.push({
        path: "/",
        query: item,
      });
    },
  },
  computed: {
    currentView() {
      return this.$route.query.view || routeMeta.login.name;
    },
  },
};
</script>
<style lang="scss">
.app-wrapper {
  height: 100%;
  .container {
    background: #9e9e9e38;
    height: 100%;
    overflow: auto;
    .avatar {
      width: 48px;
      height: 48px;
      background: center;
      & + .info {
        font-size: 12px;
        color: #1d19197c;
      }
    }
  }
}
</style>
