<template>
  <div class="flex vertical app-wrapper">
    <div class="van-nav-bar van-hairline--bottom shadow">
<<<<<<< Updated upstream
      <div class="van-nav-bar__content">
        <div class="van-nav-bar__left"></div>
        <div
          class="van-nav-bar__title van-ellipsis"
          style="flex: 1; text-align: left"
        ></div>
        <div>
          <VanButton plain round size="small" icon="search" class="shadow mr10" @click="handleClick(null, 'search')" />
          <ButtonMore />
        </div>
      </div>
=======
      <AppNav v-if="currentNavHeader === 'default'"/>
      <ViewChatNavHeader v-if="currentNavHeader === 'ViewChatNavHeader'"/>
>>>>>>> Stashed changes
    </div>
    <!-- -->
    <div class="main-view flex vertical">
      <ViewChat v-show="'ViewChat' === currentView"/>
      <ViewFriends v-show="'ViewFriends' === currentView"/>
      <ViewApplication v-show="'ViewApplication' === currentView"/>
      <ViewContact v-show="'ViewContact' === currentView"/>
    </div>
    <!-- -->
    <van-tabbar
        v-model="currentActiveNavItem"
        class="shadow van-tabbar--no--fixed"
    >
      <van-tabbar-item
          @click.native="switchMainView(navItems[prop])"
          v-for="prop in navOrders"
          :key="prop"
          :name="prop"
          :icon="navItems[prop].icon"
          :badge="navItems[prop].badge"
      >{{ navItems[prop].name }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import ButtonMore from "./components/ButtonMore.vue";
import ViewChat from "./view/ViewChat/ViewChat.vue";
import ViewFriends from "./view/ViewFriends/ViewFriends.vue";
import ViewApplication from "./view/ViewApplication/ViewApplication.vue";
import ViewContact from "./view/ViewContact/ViewContact.vue";
import router from "./route";
import AppNav from "./components/AppNav.vue";
import ViewChatNavHeader from "./view/ViewChat/ViewChatNavHeader.vue";

const navItems = {
  chat: {
    prop: "chat",
    name: "聊天",
    icon: "chat-o",
    badge: 10,
    view: "ViewChat",
  },
  friends: {
    prop: "friends",
    name: "联系人",
    icon: "friends-o",
    view: "ViewFriends",
  },
  application: {
    prop: "application",
    name: "应用",
    icon: "bag-o",
    view: "ViewApplication",
  },
  contact: {
    prop: "contact",
    name: "我的",
    icon: "contact",
    view: "ViewContact",
  },
};

const switchMainView = (item) => {
  router.push({path: "/", query: item});
};

const viewComponents = {
  ViewChat,
  ViewFriends,
  ViewApplication,
  ViewContact,
};

export const routeMeta = {
  login: {
    name: "login",
    path: "/login",
  },
};
export default {
  components: {ViewChatNavHeader, AppNav, ...viewComponents, ButtonMore},
  provide() {
    const APP = this;
    window.APP = this;
    return {APP};
  },
  data() {
    const navOrders = ["chat", "friends", "application", "contact"];
    const actions = [
      {text: "选项一"},
      {text: "选项二"},
      {text: "选项三"},
    ];
    return {
      currentView: '',
      state: {},
      currentNavHeader: "AppNav",
      viewComponents,
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
  mounted() {
    this.onLoad();
  },
  watch: {
    "$route.query": {
      immediate: true,
      handler(query) {
        this.setCurrentNavHeaderByQuery(query);
        this.setCurrentView(query);
      },
    },
  },
  methods: {
    routePush() {

    },
    routeBack() {

    },
    setCurrentView(query) {
      this.currentView = query.currentView;
    },
    setCurrentNavHeaderByQuery(query) {
      this.currentNavHeader = "default";
      const {view, isShowDetail} = query;
      if (view === "ViewChat" && isShowDetail === "true") {
        this.currentNavHeader = "ViewChatNavHeader";
      }
    },
    switchMainView,
    getBGImg(item) {
      return {
        "background-image": `url(${item.avatar})`,
      };
    },
    onLoad() {
      const vm = this;
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          console.table(vm.contactState.list);
          vm.contactState.list.push({
            avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
            nickName: "ShoneSingLone",
            updateTime: "2021年8月4日21:03:07",
          });
        }
        // 加载状态结束
        vm.contactState.loading = false;
        console.log("vm.contactState.list", vm.contactState.list);

        // 数据全部加载完成
        if (vm.contactState.list.length >= 40) {
          vm.contactState.finished = true;
        }
      }, 1000);
    },
    handleClick(type) {
      console.log(
          "🚀 ~ file: AppMobile.vue ~ line 68 ~ handleClick ~ type",
          type
      );
    },
  },
  beforeCreate() {
    if (!this.$route.query.view) {
      switchMainView(navItems.chat);
    }
  },
  computed: {
    currentView() {
      return this.$route.query.view;
    },
  },
};
</script>
<style lang="scss">
.more-tool-wrapper {
  width: 240px;
  overflow: hidden;
  border-radius: 12px;
}

.app-wrapper {
  height: 100%;

  .main-view {
    height: 0;
    flex: 1;

    .container {
      background: #9e9e9e38;
      height: 100%;
      overflow: auto;
    }
  }

  .van-tabbar--no--fixed {
    position: relative;
  }
}
</style>
//
