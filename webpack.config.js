const VueLoaderPlugin = require("vue-loader/lib/plugin"); //require - 다른파일을 불러오고 있는 파일들을 추적해서 하나의 파일로 만들어준다
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: '[hash].[ext]',
        },
      }]
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
    })

  ]
};