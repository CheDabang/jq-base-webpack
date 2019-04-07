const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    module: {
        // output: {
        //     publicPath: '/'
        // },
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                }]
            },
            {
                test: /\.(png|jpg|gif|svg|mp3|mp4)$/,
                use: 'url-loader?limit=10000&name=img/[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                use: [
                    {loader: MiniCssExtractPlugin.loader, options: {publicPath:'../'}},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ],
                exclude: /(node_modules|bower_components)/
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "./css/style.css",
        }),
        new CopyWebpackPlugin([
            { from: "./src/lib/", to: './lib' },
        ])
    ]
};