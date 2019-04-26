module.exports = {
    runtimeCompiler: true,
    filenameHashing: false,
    productionSourceMap: false,
    devServer: {
        port: 3100,
    },
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
    }
}
