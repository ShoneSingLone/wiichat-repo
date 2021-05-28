<script>
import { defineComponent, onMounted } from "vue";
import { v4 as uuid } from "uuid";
export default defineComponent({
  name: "xBtn",
  props: {
    configs: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(props, context) {
    return () => {
      const {
        configs: { text, attrs: configsAttrs },
      } = props;
      const { slots } = context;
      const id = `x-btn_${uuid()}`;
      return (
        <button
          type="button"
          class="btn ripple new-nt"
          {...configsAttrs}
          id={id}
        >
          {slots?.default ? slots.default({ id }) : text}
        </button>
      );
    };
  },
});
</script>

<style>
body{
  background-color: #e0e0e0;
}
.new-nt {
  border: unset;
  box-shadow: 5px 5px 10px #aaa, -5px -5px 10px #fff;
  position: relative;
  background: transparent;
}
.new-nt:active {
  box-shadow: 5px 5px 10px #aaa inset, -5px -5px 10px #fff inset;
}
</style>
