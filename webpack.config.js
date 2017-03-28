/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
      entry:[
      './config/router/Router.js',
      'webpack-hot-middleware/client?path=http://127.0.0.1:3011/__webpack_hmr&reload=true&noInfo=false&quiet=false',
      ],
  output: {
    path:  __dirname+ '/__build__',
    filename: 'pages.js',
    publicPath: 'http://127.0.0.1:3011/__build__/',
  },
  plugins: [
   // new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel",query:{presets:['es2015','react'],compact:false}},
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css-loader','sass-loader')},
      { test:/\.(gif|jpg|png|woff|woff2|otf|eot|ttf|svg|webp)$/i, loader:'url-loader?name=fonts/[name].[ext]'},
      {test: /\.sass$/, loader: ExtractTextPlugin.extract('style','css!sass')},
      {test: /\.less$/, loader: "style!css!less"}
    ]
  }
}
