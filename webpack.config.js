const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js',
        tsini: './src/index.ts',
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: '/node_modules/',
          },
        ]
    },
    devServer: {
        hot: true,
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Webpack & Typescript',
            header: 'Webpack com TypeScript',
            template: './src/index.html',
            chunks: ['app,','print','tsini'],
            filename: 'index.html',
            path: path.resolve(__dirname, 'dist'),
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};