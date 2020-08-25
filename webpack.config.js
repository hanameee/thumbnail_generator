const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: path.join(__dirname, "src", "index.tsx"),
    },
    target: "web",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [
                                require("tailwindcss"),
                                require("autoprefixer"),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            publicPath: "./dist/",
                            name: "[name].[ext]?[hash]",
                            limit: 5000, // 5kb
                        },
                    },
                ],
            },
        ],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};
