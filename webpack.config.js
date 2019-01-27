const path = require('path')

var config = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 5000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config
