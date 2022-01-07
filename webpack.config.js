const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: __dirname+'/dist',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    plugins: [
                new HtmlWebpackPlugin({ template: './index.html' })
             ]
}