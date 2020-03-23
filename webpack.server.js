const path = require('path');
const webpackex =require('webpack-node-externals');


module.exports ={
  target: 'node',
  entry: './Server/server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),

  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node-modules/',
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', {targets: {browsers: ['last 2 versions']}}],
          ],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  externals: [webpackex()],

};
