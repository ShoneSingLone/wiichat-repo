import {defineComponent} from "vue";

export default defineComponent({
    name: 'xBtn',
    props: {
        configs: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    setup(props) {
        const {configs: {slots, text}} = props;
        return () => {
            return (
                <button type="button" className="btn btn-primary">
                    {text || slots.default && slots.default()}
                </button>
            )
        }
    }
})