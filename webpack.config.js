const base = require('./webpack.config.base.js')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
console.log(base);
module.exports = {
    mode:'development',
    ...base,
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        port:9000,
    },
    plugins:[
        ...base.plugins
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
        ]
    }
}