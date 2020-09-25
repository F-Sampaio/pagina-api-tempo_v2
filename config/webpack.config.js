const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/js/script.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    }, 
    plugins: [
    new HtmlWebpackPlugin()
  ], 
    module: {
        rules: [
            {
                test: /\.js$/, //using regex to tell babel exactly what files to transcompile
                exclude: /node_modules/, // files to be ignored
                loader: 'babel-loader', // specify the loader
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
}