const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcRoot = path.resolve(__dirname, "src")
const entryArray = ["sandbox01", "sandbox02", "sandbox03"]
    .map(x => `app/${x}`)

//reduceでいけそうやけど..
const entries = {}
for (let ent of entryArray) {
    entries[ent] = `${srcRoot}/${ent}/index.ts`
}


//https://github.com/jantimon/html-webpack-plugin/issues/218
function htmlWebpackPlugin() {
    return entryArray.map(x => {
        return new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            chunks: [x],
            filename: `${x}.html`,
            scriptLoading: "defer"
        })
    })
}

module.exports = (env, args) => {
    console.log(`env=${env}`)

    const config = {
        entry: entries,
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: "",
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader"
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        plugins: [
            ...htmlWebpackPlugin()
        ],

        //-----
        //devserver
        devServer: {
            open: true
        }
    }
    console.log(config)
    return config
}