const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './main.css',
    other: './other.css',
  },
  output: {
    filename: '[name].built.js',
  },
  plugins: [
    new ExtractTextPlugin('[name].built.css'),
    // Comment this next line out and the issue goes away
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'raw-loader',
        }),
      },
    ],
  },
};
