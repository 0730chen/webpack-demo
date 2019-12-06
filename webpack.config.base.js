const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//清除dist
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const helloWorldPlugin = require('./src/HelloWordPlugin')
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new helloWorldPlugin({options:true}),
        new HtmlWebpackPlugin({
            title: '缓存',
            template: "./index.html"
        })
    ],
    module: {
        rules: [
            {
              test:/\.shit$/i,
              use:[
                  {
                      loader: path.resolve('./src/shit.js'),
                      options: {}
                  }
              ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader","css-loader",{
                    loader:"sass-loader",
                        //node-sass非常难装，所以使用dart-sass
                        options:{
                        implementation:require("dart-sass")
                        }
                    }
                ],
            },
            {
              test:/\.styl$/i,
              loader:["style-loader","css-loader","stylus-loader"]
            },
            {
                test:/\.less$/i,
                loader:["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            }
        ],
    },
}