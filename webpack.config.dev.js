const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.(png|jpg|gif|svg|mp3|mp4)$/,
                use: 'url-loader?limit=10000&name=img/[name].[hash:8][ext]'
            }
        ],

    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/lib/', to: './lib' },
        ]),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ],
    devServer: {
        open: false,
        compress: true,
        port: 2333,
        inline: true,
        hot: true,
        disableHostCheck: true
    }
};