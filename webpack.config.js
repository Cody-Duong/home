module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: "./webpack/entry.js",
  output: {
    // we’re going to put the generated file in the assets folder so jekyll will grab it.
    // if using GitHub Pages, use the following:
    // path: "assets/javascripts"
    path: __dirname + "assets/javascripts/",
    filename: "bundle.js",
    publicPath: __dirname + "assets/javascripts/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react', '@babel/preset-env']
        }
      }
    ]
  },
  mode: 'production'
};