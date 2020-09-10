const path = require("path");
var core = require("@fuselab/build-config/webpack.core");
var CopyPlugin = require("copy-webpack-plugin");
const package = require("./package.json");
const version = `v${package.version}`;

module.exports = Object.assign(core, {
  mode: "none",
  entry: {
    "fuse-ui-fabric": "./index.ts",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(`../built/${version}`),
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./themes/**/*.woff", to: `./assets/fonts/`, flatten: true }],
    }),
  ],
});
