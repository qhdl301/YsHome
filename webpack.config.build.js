const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: __dirname+"/docs",
        publicPath:"/firstVueProject"
      },    
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
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