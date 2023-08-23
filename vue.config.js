const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, // 关闭eslint
    configureWebpack: {
        resolve: {
            alias: {
                // 给 @/assets 这个路径取别名 assets。
                // 以后当使用 v-bind 语法时使用 assets 就是调用 src/assets 这个路径，如<img :src="assets/">，其实就是<img :src="src/assets/">
                // 如果不使用 v-bind 语法时使用 assets 则需要在前面加 ~ ，如<img src="~assets/">，其实就是<img src="src/assets/">
                // 因为不使用 v-bind 语法只有加 ~ 才会认为是别名，否则会认为是字符串。
                assets: '@/assets', // @ 就是src(vue语法)
                static: path.resolve('public/static')
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                // 径前缀
                // target: 'https://mock.apifox.cn/m1/2874199-0-default', // http://localhost:3000
                target: 'http://localhost:9000/',
                pathRewrite: { '^/api': '' },
                changeOrigin: true
            }
        }
    }
})
