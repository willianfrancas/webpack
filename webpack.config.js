const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            '...'
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './app/src/app.html',
            filename: 'app.html',
            hash: true,
        }),
        new MiniCssExtractPlugin({
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
    }
};