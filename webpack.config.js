const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', path.resolve(__dirname, './js/script.js')],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'main.js',
    sourceMapFilename: 'main.js.map'
  },
  devServer : {
    contentBase: path.resolve(__dirname, './')
  },
  devtool: 'source-map'
};