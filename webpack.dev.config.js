const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      { /*src文件夹下面的以.js结尾的文件，要使用babel解析 */ /*cacheDirectory是用来缓存编译结果，下次编译加速 */
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(scss|css)$/,
        include: [path.resolve(__dirname, 'src/components'), path.resolve(__dirname, 'src/containers'), path.resolve(__dirname, 'src/routes')],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]-[hash:base64:8]',
              minimize: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // data: '@import "variables.scss"',
              includePaths: [
                path.resolve(__dirname, 'src/style')
              ]
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        exclude: [path.resolve(__dirname, 'src/components'), path.resolve(__dirname, 'src/containers'), path.resolve(__dirname, 'src/routes')],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
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
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      router: path.resolve(__dirname, 'src/router'),
      '~': path.resolve(__dirname, 'src') // root
    }
  },
  plugins: [
    new htmlPlugin({
      minify: {
        removeAttributeQuotes: true
      },
      hash: true,
      template: './src/index.html'
    })
  ],
  devServer: {
    // 设置基本目录结构
    contentBase: path.resolve(__dirname, 'dist'),
    host: '192.168.114.150',
    // 服务端压缩是否开启
    compress: true,
    port: 8888,
    proxy: {
      '/kugou': {
        target: 'http://m.kugou.com/',
        changeOrigin: true,
        pathRewrite: { '^/kugou': '' }
      }
    }
  }
};
