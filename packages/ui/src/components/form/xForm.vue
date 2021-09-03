<template>
  <aForm
    ref="form"
    class="x-form-wrapper"
    :model="forms"
    :rules="rules"
    :label-width="labelWidth"
    :label-position="'right'"
  >
    <div
      class="x-component-form_item-wrapper grid gap16"
      :style="itemWrapperStyle"
    >
      <aFormItem
        v-for="prop in itemsOrder"
        :key="prop"
        :prop="prop"
        :style="items[prop] && itemStyle(items[prop])"
      >
        <xFormLabel
          v-if="items[prop].label"
          :label="items[prop].label"
          :width="labelWidth"
          :configs="items[prop]"
        />
        <xFormItem
          :value="forms[prop]"
          :configs="items[prop]"
          @change="handleFormItemChange($event, prop)"
        />
      </aFormItem>
    </div>
  </aForm>
</template>

<script>
import _ from "lodash";
import { xFormLabel } from "./xForm.Label";

export default {
  name: "xForm",
  emits: ["update:configs", "update:form-change", "change"],
  components: { xFormLabel },
  props: {
    configs: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      forms: null,
    };
  },
  computed: {
    validate() {
      return this.$refs.form.validate;
    },
    itemWrapperStyle() {
      const col = this.configs.col || 2;
      const minWidth = this.configs.minWidth || "100%";
      return {
        minWidth,
        gridTemplateColumns: `repeat(${col}, 1fr)`,
      };
    },
    labelWidth: {
      get() {
        return this.configs.labelWidth || "120px";
      },
    },
    itemsOrder: {
      get() {
        let order = this.configs.itemsOrder || [];
        /* order 不是必填的 */
        if (order.length === 0) {
          order = _.map(this.configs.items, (v, prop) => prop);
        }
        return order;
      },
      set(itemsOrder) {
        this.cofngs.itemsOrder = itemsOrder;
      },
    },
    form: {
      get() {
        return this.configs.form;
      },
      set(form) {
        this.cofngs.form = form;
      },
    },
    formMess: {
      get() {
        return this.configs.form;
      },
      set(form) {
        this.configs.formMess = form;
      },
    },
    rules: {
      get() {
        return this.configs.rules;
      },
      set(rules) {
        this.cofngs.rules = rules;
      },
    },
    items: {
      get() {
        return this.configs.items;
      },
      set(items) {
        this.cofngs.items = items;
      },
    },
    formRef() {
      return this.$refs.form;
    },
  },
  watch: {
    configs: {
      handler(newVal) {
        this.forms = {
          ...newVal["form"],
        };
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.configs.$validate = () => this.validate();
  },
  methods: {
    itemStyle(item) {
      const style = {};
      if (item.col) {
        style.gridColumnStart = `span ${item.col}`;
      }
      if (item.row) {
        style.gridRowStart = `span ${item.row}`;
      }
      /* offset */
      if (item.colOffet) {
        style.gridColumn = item.colOffet;
      }
      if (item.rowOffet) {
        style.gridRow = item.rowOffet;
      }
      return style;
    },
    handleFormItemChange(val, prop) {
      if (!_.isPlainObject(this.configs.form)) {
        this.configs.form = {};
      }
      this.configs.form[prop] = val;
      this.$emit("update:form-change", this.form, { prop, val });
      this.$emit("change", this.configs);
      this.$emit("update:configs", this.configs);
    },
  },
};
</script>

<style lang="scss">
.x-form-wrapper {
  .x-component-form_item-wrapper {
    .ant-form-item-control {
      > div {
        > div {
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;

          .a-form-item__label + .a-form-item__content {
            margin-left: 0 !important;
          }

          .x-form-item {
            flex: 1;
            display: flex;

            > label {
              .form-label-required {
                margin: auto;
                color: transparent;
                margin-right: 4px;
              }
            }

            > div {
              flex: 1;
            }
          }

          &.is-required {
            .a-form-item__content {
              > label {
                .form-label-required {
                  color: #f56c6c;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
