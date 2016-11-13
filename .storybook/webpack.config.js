// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://goo.gl/qPbSyX

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const webpack = require('webpack');

module.exports = {
  plugins: [
    // your custom plugins
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      // 此处定义通用样式的变量
      COLOR_1: '"#ff7575"',
      COLOR_2: '"#5f5f5f"',
      COLOR_3: '"#a2a2a2"',
      COLOR_4: '"#f6f6f6"',
      FONT: '""',
    }),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    modulesDirectories: [
      'app',
      'node_modules',
    ],
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      // add your custom loaders.
      {
        test: /\.jsx?$/, // Transform all .js files required somewhere with Babel
        loader: 'babel',
        exclude: /node_modules/,
      }, {
        // Do not transform vendor's CSS with CSS-modules
        // The point is that they remain in global scope.
        // Since we require these CSS files in our JS or CSS files,
        // they will be a part of our compilation either way.
        // So, no need for ExtractTextPlugin here.
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      }, {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          'file-loader',
          // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ],
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader?limit=10000',
      }
    ],
  },
};
