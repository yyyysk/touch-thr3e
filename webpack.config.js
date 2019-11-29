module.exports = {
  mode: "development",
  entry: "./app/src/index.tsx",
  output: {
    path: `${__dirname}/public/assets/js`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};
