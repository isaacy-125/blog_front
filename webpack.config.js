var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
         test: /\.css$/,
         use: ExtractTextPlugin.extract({
           fallback: "style-loader",
           use: ["css-loader","postcss-loader"]
        })
      },
      {
        test: /\.less$/,
        use: ["style-loader","css-loader","less-loader"]
      },
      { 
         test: /\.(png|jpg)$/,
         loader: 'url-loader',
         options: {
           limit: 8129
         }
      }
    ]
  },
  devServer:{
      historyApiFallback: true,
      host:'127.0.0.1',
      hot: true, //HMR模式   
      inline: true,//实时刷新
      port: 9091 // 修改端口，一般默认是8080
  },
  resolve: {
      extensions: ['.js', '.jsx', '.css'],
      modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
  plugins: [
    // [["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]],
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: true
    }),
    new HtmlWebpackPlugin({
        template:'./index.html' 
    }),
    new ExtractTextPlugin({
        filename: '[name].[hash].css',
        disable: false,
        allChunks: true,
    }),
    new CleanWebpackPlugin(['dist'])
  ],

}
module.exports  = config;

// webpack里面配置的bundle.js需要手动打包才会变化,目录可以由自己指定;
// webpack-dev-server自动检测变化自动打包的是开发环境下的bundle.js,打包路径由contentBase决定,两个文件是不一样的.
