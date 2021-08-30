module.exports = {
  lintOnSave: true,
  assetsDir: "assets",
  publicPath: "/form-designer",
  productionSourceMap: false,
  devServer: {
    // proxy: "http://h5.tucy.top"
    proxy: "http://localhost:7010"
  }
}
