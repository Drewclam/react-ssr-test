const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    mode: 'development',
    externals: [nodeExternals()],
    entry: './server/index.js',
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'server_build'),
      // assetModuleFilename: '../build/static/media/[hash][ext][query]'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          // generator: {
          //   filename: '../build/static/media/[hash][ext][query]'
          // }
        }
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
}