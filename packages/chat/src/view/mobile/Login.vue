<template>
  <van-form ref="form">
    <!-- 通过 pattern 进行正则校验 -->
    <van-field
      v-model="form.userName"
      name="pattern"
      placeholder="用户名"
      :rules="rules.userName"
    />
    <!-- 通过 validator 进行函数校验 -->
    <van-field
      v-model="form.userNamePwd"
      name="validator"
      placeholder="密码"
      :rules="rules.userNamePwd"
    />
    <div style="margin: 16px">
      <van-button
        round
        block
        type="primary"
        native-type="submit"
        @click="onSubmit"
      >
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>
import { defineComponent } from "vue";
import { Toast } from "vant";
import _ from "lodash";
import request from "../../request";
import { goTo } from "@ventose/ui/src/utils/goTo";

export default defineComponent({
  name: "Login",
  data() {
    const validator = (value) => {
      return !!value;
    };
    const rules = {
      userName: [{ validator, message: "请输入用户名" }],
      userNamePwd: [{ validator, message: "请输入密码" }],
    };
    return {
      rules,
      form: {
        userName: "",
        userNamePwd: "",
      },
    };
  },
  methods: {
    async onSubmit(errorInfo) {
      try {
        let res = await this.$refs.form.validate();
        if (!res) {
          res = await request.login();
          goTo(this, { query: { view: "main" } });
        }
      } catch (errors) {
        console.error(errors);

        if (_.isArray(errors)) {
          errors.forEach((error, index) => {
            setTimeout(() => {
              Toast.fail(error.message);
            }, index * 2000);
          });
        }
      }
    },
  },
});
</script>

<style>
</style>
