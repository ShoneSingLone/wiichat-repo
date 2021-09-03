import { defineComponent } from "vue";

export const xFormLabel = defineComponent({
  props: ["label", "item", "configs"],
  methods: {
    RenderTips(h) {
      if (this.configs?.renderTips) {
        const tipsContent = this.configs.renderTips();
        return (
          <el-popover placement="right" trigger="hover">
            {tipsContent}
            <i slot="reference" class="el-icon-warning" circle />
          </el-popover>
        );
      }
      return null;
    },
  },
  render(h) {
    return (
      <div className="ant-form-item-label">
        <label for={this.configs.prop} class="flex middle">
          <span class="form-label-required">*</span>
          <span class="form-label-content">{this.label}</span>
          {this.RenderTips(h)}
        </label>
      </div>
    );
  },
});
