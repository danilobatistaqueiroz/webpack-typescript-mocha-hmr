const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let glob = require("glob");

let rentCarPath = __dirname + "/src/rent-a-car.ts";
let nearestStoresPath = __dirname + "/src/nearest-stores.ts";
let entryPath = { rentCar: rentCarPath, nearestStores: nearestStoresPath };
let outFilename = "[name].bundle.js";
let outputPath = { filename: outFilename, path: __dirname + "/dist/" };

if (process.env.TESTBUILD) {
    entryPath = glob.sync(__dirname + "/test/**/*.spec.ts");
    outputPath = { path : __dirname + "/test-dist/" };
}

module.exports = {
    mode: 'development',
    entry: entryPath,
    output: outputPath,
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: '/node_modules/',
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
        ]
    },
    resolve: { extensions: [".js", ".ts"] },
    devServer: {
        hot: true,
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Store Locator',
            template: './src/nearest-stores.html',
            filename: 'nearest-stores.html',
            path: path.resolve(__dirname, 'dist'),
            chunks: ['nearestStores'],
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Rent a car',
            header: 'Choose a car for rent',
            template: './src/rent-a-car.html',
            filename: 'rent-a-car.html',
            path: path.resolve(__dirname, 'dist'),
            chunks: ['rentCar'],
        }),
    ]
};