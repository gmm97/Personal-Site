module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/i,
        use: "raw-loader",
        options: {
          esModule: false,
        },
      },
    ],
  },
};
