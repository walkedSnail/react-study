const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// 导入每次删除文件夹的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
// 导入抽取css插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 导入压缩css的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname,'./src/main.js'),
    vendors: ['jquery'] // 把要抽离的第三方包的名称，放到这个数组中
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js/bundle.js'
  },
  plugins: [ // 插件
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true, // 合并多余空格
        removeComments: true, // 移除注释
        removeAttributeQuotes: true, // 移除属性的双引号
      }
    }),
    new CleanWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors', // 指定要抽离的入口文件
      filename: 'js/vendors.js' // 将来再发布的时候，除了会有一个bundle.js,还会有一个vendor.js的文件，里面存放了所有的第三方包
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { // 配置压缩选项
        warnings: false, // 移除警告
      }
    }),
    new webpack.optimize.DedupePlugin({ // 设置为产品线上环境，进一步压缩JS代码
      'process.env.NODE_ENV': 'production'
    }),
    new ExtractTextPlugin("css/styles.css"), // 抽取css文件
    new OptimizeCssAssetsPlugin() // 压缩css的插件
  ],
  module: {
    rules: [
      { 
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader",
            publicPath: '../' // 指定抽取的时候，自动为我们的路径加上 ../ 前缀
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
            publicPath: '../' // 指定抽取的时候，自动为我们的路径加上 ../ 前缀
        })
      },
      { test: /\.(png|gif|bmp|jpg|jpeg)$/, use: 'url-loader?limit=5000&name=images/[hash:8]-[name].[ext]'},
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
    ]
  }
}