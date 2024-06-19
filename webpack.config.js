const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    entry: './src/index.js',
    output: {
        filename: 'webby.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "odin res webpack",
            filename: 'webby.html',
            inject: 'body',
        })
    ],
};