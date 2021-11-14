const path  = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { loader } = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');



const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`


module.exports = {
  entry: '../1/main.js',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', 
  output: { 
    filename: `./${filename('js')}` ,
    path: path.resolve(__dirname, 'build')
},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/, 
        use: [MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: '../1/index.html',
      filename: 'index.html',
      minify: {
          collapseWhitespace: isProd,
      }
  }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./${filename('css')}`
  })
  ]
}