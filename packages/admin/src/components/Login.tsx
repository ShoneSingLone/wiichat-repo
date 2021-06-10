import { reactive, defineComponent } from "vue";
export default defineComponent({
  name: "Login",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const state = reactive({ count: 0, msg: "hello" });
    return () => {
      return (
        <>
          <h1>{state.msg}{state.count}</h1>
          <AButton type="button" onClick={()=>state.count++}>
            count is: {state.count}
          </AButton>
        </>
      );
    };
  },
});
