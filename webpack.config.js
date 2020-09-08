module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    path: __dirname,
    filename: "src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          //creates 'style' nodes from JS strings
          "style-loader",
          //translates CSS into commonJS
          "css-loader",
          //compile sass to css,
          "sass-loader",
        ],
      },
    ],
  },
};
