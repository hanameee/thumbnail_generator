const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.html",
    },
    output: {
        filename: "[name].js",
        path: path.resolve("./dist"),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
    },
};
