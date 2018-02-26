const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // polku josta React aloittaa suorituksen
  entry: {
    main: './src/index.jsx',
    vendor: ['react', 'react-loadable', 'styled-components', 'material-ui']
  },
  output: {
    publicPath: '/',
    // polku johon bundlattu tiedosto generoidaan ja bundlen nimi
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  // Kerrotaan webpackille, että selvittää automaattisesti nämä päätteet
  // Ei tarvitse kirjoittaa esim importissa tiedoston päätettä
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    // loadereita tarvitaan jotta voidaan käyttää ES6 ja JSX koodia
    // babel-loaderia käytetään jokaisessa tiedostossa jotka päättyvät .js tai .jsx
    loaders: [
      { test: /\.js$/, loader: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
      { test: /\.jsx$/, loader: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Shoppinglist',
      template: './src/index.html',
      hash: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};
