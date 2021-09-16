const path = require('path');

module.exports = {
  entry: './src/index.js', 
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'public'), 
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,                         
        exclude: /(node_modules)/,             
        use: {
          loader: 'babel-loader',                
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']      
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        } 
      }
    ]
  },
  devServer: {
    static: './public',
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  devtool: "source-map"
};