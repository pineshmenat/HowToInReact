const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "inline-source-map",
    entry: "./app/index.tsx",
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(ts|tsx)$/, loader: 'ts-loader'}
        ]
    },
    mode: process.env.node_env === "production"? "production": "development",
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['.ts', 'tsx', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}