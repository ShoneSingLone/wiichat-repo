import { reactive, defineComponent, ref } from "vue";
export default defineComponent({
  name: "Login",
  setup: () => {
    const state = reactive({ count: 0, msg: "hello", form: {} });
    const handleSubmit = (e) => {
      console.log(e);
    };
    return () => {
      const refLoginForm = ref(null);
      return (
        <div>asdf </div>
      );
    };
  },
});
