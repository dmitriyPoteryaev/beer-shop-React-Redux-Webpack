"use strict"
let path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")


module.exports = {
   
    // собираем всё в режиме разработки
    mode: "development",
    // указываем тот файл,который является входным.Т.е мы указываем путь к основному файлу,а webpack уже самостоятельно соединяет все модули
    entry: {
      // 
      main: ["./src/index.jsx"],
    },
    // указываем куда нужно складывать все результаты webpack'a
    output: {
      filename: "[name].[contenthash].js",
      // куда это всё складывать?Путь(дорожка) указавается в поле path
      // для того чтобы использовать данное поле воспользуемся встроенным модулем path(он прописан вверху)
  
      path: path.resolve(__dirname, 'dist'),
    },resolve: {
        extensions: [".js", ".json", '.jsx', ".png"],
      },
      devServer: {
        historyApiFallback: true,
        static: "./",
        port: 4200,
        liveReload: false
      },
   
      plugins: [
        new HTMLWebpackPlugin({
          template: "./index.html",
        }),  new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
          })
        ],
        module: {
            rules: [  {
              test: /\.css$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {},
                },
                "css-loader",
              ],
            },
              {
                test: /\.s[ac]ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {},
                  },
                  "css-loader",
                  "sass-loader",
                ],
              },
              {
                test: /\.(png|jpg|svg|gif)$/,
                type: "asset/resource",
              },
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"],
                  },
                }},

                {
                  test: /\.jsx$/,
                  exclude: /node_modules/,
                  use: {
                    loader: "babel-loader",
                    options: {
                      presets: ["@babel/preset-env","@babel/preset-react"]
                    },
                  }}
              
              ]
              
    }}