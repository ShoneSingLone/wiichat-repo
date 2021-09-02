<template>
  <div class="login-main">
    <div id="formLogin" class="user-layout-login">
      <aTabs
        v-model:activeKey="tabActiveKey"
        :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
        @change="handleTabClick"
      >
        <aTabPane
          key="tabCredentials"
          :tab="$t('user.login.tab-login-credentials')"
        >
          <aAlert
            v-if="isLoginError"
            type="error"
            showIcon
            style="margin-bottom: 24px"
            :message="$t('user.login.message-invalid-credentials')"
          />
          <xForm :configs="configsCredentials" />
        </aTabPane>
        <aTabPane
          key="tabMobile"
          :tab="$t('user.login.tab-login-mobile')"
          force-render
        >
        </aTabPane>
      </aTabs>
    </div>
  </div>
</template>
<script>
import { Moment } from "moment";
import { defineComponent, reactive, toRaw, UnwrapRef } from "vue";
import { defineItem } from "@ventose/ui";

export default defineComponent({
  methods: {
    handleTabClick(key) {
      this.tabActiveKey = key;
    },
  },
  data() {
    return {
      isLoginError: true,
      tabActiveKey: "tabCredentials",
      configsCredentials: {
        form: {},
        items: {
          ...defineItem.normal({ prop: "prop", label: "ts" }),
        },
        rules: {},
        col: 1,
      },
    };
  },
});
</script>
