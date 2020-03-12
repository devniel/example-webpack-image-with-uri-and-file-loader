const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        "test": /\.(png|jpg|gif)$/i,
        "use": {
          "loader": "url-loader",
          "options": {
              "mimetype": "image/png"
          }
        }
      },
      {
        "test": /\.(png|jpg|gif)$/i,
        "loader": "file-loader",
        "options": {
            "name": "[name].[ext]"
        }
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};