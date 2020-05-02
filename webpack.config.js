const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcRoot = path.resolve(__dirname, "src")

const entryArray = ["app/sandbox01"]

const entries = {}
for (let ent of entryArray) {
    entries[ent] = `${srcRoot}/${ent}/index.ts`
}


console.log({ entries })

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