# tsyringe-sandbox

`tsyringe-sandbox` を試すところ

## プロジェクトを作るのにしたこと

```
rem typescript 使うので
yarn add typescript -D

rem webpackも使う
yarn add webpack webpack-cli webpack-dev-server ts-loader -D

rem とりあえず動作確認はブラウザでしたかったので
yarn add html-webpack-plugin -D

rem tsyringeの準備
yarn add tsyringe reflect-metadata

rem tsconfig 作る
yarn tsc --init
```