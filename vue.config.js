const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/uploads': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/uploads': ''
        }
      }
    },
    historyApiFallback: true,
  },
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      // Configurações opcionais do Workbox aqui
    }
  }
});
