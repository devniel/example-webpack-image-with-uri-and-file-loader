### About webpack and image loading with url-loader instead of file-loader.

Notice the statement of `const x = require("!!url-loader!./image.png");`, where `!!` is used to force webpack to use `url-loader` instead of `file-loader`, I think that the order is ignored in the webpack config file.
