const base = require('./webpack.config.base.js')
const path = require('path')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const FileListPlugin = require('./src/FileListPlugin')
module.exports = {
    mode:'development',
    ...base,
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        port:9000,
    },
    plugins:[
        ...base.plugins,
        new FileListPlugin()

    ],
    module:{
        rules:[
            ...base.module.rules,
            {
                test: /\.css$/,
                use: [
                    "style-loader","css-loader"
                ],
            },
            {
                test:/\.md$/i,
                use:{
                    loader:path.resolve(__dirname,'./src/markdownLoader.js')
                }
            }
        ]
    }
}