const path = require("path");

module.exports = {
  target: "node",
  mode: "production",
  entry: "./entry.js",
  output: {
    path: path.resolve(__dirname, "./lib"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
};
