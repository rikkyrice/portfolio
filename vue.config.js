module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  devServer: {
    proxy: process.env.VUE_APP_API_BASE_URL,
  },
  transpileDependencies: ["vuetify"],
};
