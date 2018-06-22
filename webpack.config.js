const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      'babel-polyfill',
      path.join(__dirname, './src/index.js')
    ],
    vendor: ['react', 'react-dom', 'redux', 'react-router-dom', 'react-redux']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(scss|css)$/,
        include: [path.resolve(__dirname, 'src/components'), path.resolve(__dirname, 'src/containers'), path.resolve(__dirname, 'src/routes')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                modules: true,
                localIdentName: '[name]__[local]-[hash:base64:8]',
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                config: {
                  path: 'postcss.config.js'
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
                // data: '@import "variables.scss"',
                includePaths: [
                  path.resolve(__dirname, 'src/style')
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.(scss|css)$/,
        exclude: [path.resolve(__dirname, 'src/components'), path.resolve(__dirname, 'src/containers'), path.resolve(__dirname, 'src/routes')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                config: {
                  path: 'postcss.config.js'
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
                minimize: true
              }
            }
          ]
        })
      },
      {
        test: /\.(svg|woff2?|ttf|eot)(\?.*)?$/i,
        use: 'url-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeAttributeQuotes: true
      },
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    }),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*.html'))
    })
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      router: path.resolve(__dirname, 'src/router'),
      '~': path.resolve(__dirname, 'src') // root
    }
  }
};
