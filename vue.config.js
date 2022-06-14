module.exports = {
  lintOnSave: false,
  css: {
      loaderOptions: {
        scss: {
            data: `@import "@/assets/css/global.scss";`
        }
      }
    }
}