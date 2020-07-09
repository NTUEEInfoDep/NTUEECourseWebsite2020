const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/components/index.jsx',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'bundle'),
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
            {
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
        ],
    },
    devtool: '#eval-source-map', // for develop
    devServer: {
        stats: {
            children: false, // cleaner display on terminal
            maxModules: 0, // cleaner display on terminal
            colors: true,
            hot: true,
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/html/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};