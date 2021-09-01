import { defineComponent } from "vue";

export const GhFormLabel = defineComponent({
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
			<label for="name" class="el-form-item__label flex middle">
				<span class="form-label-required">*</span>
				<span class="form-label-content">{this.label}</span>
				{this.RenderTips(h)}
			</label>
		);
	},
});
