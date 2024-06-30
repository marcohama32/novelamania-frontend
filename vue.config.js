const { defineConfig } = require('@vue/cli-service');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

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
  },
  configureWebpack: {
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        maxSize: 244000,
      },
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Remove console logs
            },
          },
        }),
        new CssMinimizerPlugin({})
      ],
    },
  },
});
