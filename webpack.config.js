const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:'development',
    entry:{
        main:'./src/main.js'
    },
    module:{
        rules:[
            {test:/\.vue$/, use:'vue-loader'},
            {test:/\.css$/, use:['vue-style-loader', 'css-loader']}
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.join(__dirname,'dist')
    },
    resolve:{
        extensions:['.js','.vue']
    },
    devServer:{
        static:{
            directory: path.join(__dirname, 'dist'),
        },
        port:3030,
        hot:true

    }
}