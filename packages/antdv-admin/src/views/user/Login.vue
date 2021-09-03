<script lang="jsx">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineAsyncComponent(
  () =>
    new Promise(async (r) => {
      const { defineItem,xComponents:{xForm} } = await import("@ventose/ui");
      r(
        defineComponent({
          render() {
            const Alert =  (this.isLoginError)?<aAlert type="error" showIcon style="margin-bottom: 24px" message={this.$t( "user.login.message-invalid-credentials" )} />:null;
            return (
              <div class="login-main">
                <div id="formLogin" class="user-layout-login">
                  <aTabs activeKey={this.tabActiveKey} tabBarStyle={{ textAlign: "center", borderBottom: "unset" }} onChange={(key) => this.handleTabClick(key)}
                  >
                    <aTabPane
                      key="tabCredentials"
                      tab={this.$t("user.login.tab-login-credentials")}
                    >
                      {Alert}
                      <xForm configs={this.configsCredentials} />
                    </aTabPane>
                    <aTabPane
                      key="tabMobile"
                      tab={this.$t("user.login.tab-login-mobile")}
                      force-render
                    ></aTabPane>
                  </aTabs>
                </div>
              </div>
            );
          },
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
        })
      );
    })
);
</script>
