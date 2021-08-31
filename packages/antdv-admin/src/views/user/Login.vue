<script lang="tsx">
import { Moment } from "moment";
import { defineComponent, reactive, toRaw, UnwrapRef } from "vue";
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: "",
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });

    const onSubmit = () => {
      console.log("submit!", toRaw(formState));
    };

    const asdf = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formState,
      onSubmit,
    };

    return () => {
      return (
        <div class="main">
          <a-form
            id="formLogin"
            class="user-layout-login"
            ref="formLogin"
            form={form}
            onSubmit={handleSubmit}
          ></a-form>
        </div>
      );
    };
  },
});
</script>
