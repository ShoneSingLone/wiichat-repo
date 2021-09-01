<template>
  <el-form
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
      <el-form-item
        v-for="prop in itemsOrder"
        :key="prop"
        :prop="prop"
        :style="items[prop] | itemStyle"
      >
        <xFormLabel
          v-if="items[prop].label"
          :label="items[prop].label"
          :width="labelWidth"
          :configs="items[prop]"
        />
        <GhFormItem
          v-model="forms[prop]"
          :configs="items[prop]"
          @change="handleFormItemChange($event, prop)"
        />
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
//@ts-nocheck

import _ from "lodash";
import { xFormLabel } from "./xForm.Label";


export default {
  name: "GhForm",
  components: {
    xFormLabel,
  },
  filters: {
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
  },
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
    handleFormItemChange(val, prop) {
      if (_.isPlainObject(this.configs.form)) {
        delete this.configs.form[prop];
      } else {
        this.$set(this.configs, "form", {});
      }
      this.$set(this.configs.form, prop, val);
      this.$emit("form-change", this.form, { prop, val });
      this.configs?.handleFormChange?.(this.form, { prop, val });
      this.$emit("change", this.configs);
    },
  },
};
</script>

<style lang="scss">
.x-form-wrapper {
  .x-component-form_item-wrapper {
    .el-form-item {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;

      .el-form-item__label + .el-form-item__content {
        margin-left: 0 !important;
      }

      .el-form-item__content {
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
        .el-form-item__content {
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
</style>
