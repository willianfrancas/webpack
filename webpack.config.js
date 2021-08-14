const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
        clean: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './app/src/app.html',
            filename: 'app.html',
            hash: true,
        }),
        new CopyWebPackPlugin({
            patterns: [
                {
                    from: './app/src/css',
                    to: 'css'
                }
            ]
        }),
    ]
};