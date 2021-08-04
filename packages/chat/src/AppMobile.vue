<template>
  <div class="flex vertical app-wrapper">
    <div class="van-nav-bar van-hairline--bottom shadow">
      <div class="van-nav-bar__content">
        <div class="van-nav-bar__left"></div>
        <div class="van-nav-bar__title van-ellipsis">{{ viewTitle }}</div>
        <div class="">
          <van-button
            plain
            round
            size="small"
            icon="search"
            class="shadow mr10"
            @click="handleClick(null, 'search')"
          />

          <ButtonMore />
        </div>
      </div>
    </div>
    <div class="container flex1">
      <!-- https://b2nil.github.io/taro-ui-vue3/docs/virtualscroll.html -->
      <van-list
        v-model:loading="contactState.loading"
        :finished="contactState.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-swipe-cell v-for="item in contactState.list" :key="item">
          <UserCard :item="item" />
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </van-list>
    </div>

    <van-tabbar v-model="currentActiveNavItem" class="shadow">
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
import UserCard from "./components/UserCard.vue";
import ButtonMore from "./components/ButtonMore.vue";
export const routeMeta = {
  login: {
    name: "login",
    path: "/login",
  },
};
export default {
  components: { UserCard, ButtonMore },
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
.more-tool-wrapper {
  width: 240px;
  overflow: hidden;
}

.app-wrapper {
  height: 100%;
  .container {
    background: #9e9e9e38;
    height: 100%;
    overflow: auto;
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
  }
}
</style>
