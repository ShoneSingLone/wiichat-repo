// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

function addStyleResource(rule) {
    rule.use("style-resource").loader("style-resources-loader")
        .options({
            patterns: [path.resolve(__dirname, "./src/assets/scss/variables.scss")],
        });
}

module.exports = {
    publicPath:'./',
    lintOnSave: false,
    devServer: {
        open: true
    },
    chainWebpack: config => {
        const types = ["vue-modules", "vue", "normal-modules", "normal"];
        types.forEach(type => addStyleResource(config.module.rule("scss").oneOf(type)));
    }
}