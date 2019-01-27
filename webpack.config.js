const path = require('path')

var config = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 5000
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
