// const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const path = require('path')
const base = require('./webpack.config.base.js')
module.exports = {
    mode: 'production',
    ...base,
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: "[id].[hash].css"
        })
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/,
                use: [
                   MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
        ]


    },

}