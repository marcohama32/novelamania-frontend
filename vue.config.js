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
    historyApiFallback: true, // Adiciona esta linha para tratar rotas history mode
  }
});
