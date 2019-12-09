class FileListPlugin {
    apply(compiler) {
        // emit 是异步 hook，使用 tapAsync 触及它，还可以使用 tapPromise/tap(同步)
        console.log('我是生成md插件')
        compiler.hooks.done.tapAsync('FileListPlugin', (state, callback) => {
            // 在生成文件中，创建一个头部字符串：
            // console.log(state.compilation.assets);
            var filelist = 'In this build:\n\n';
            let assetNames = []
            for(let assetName in state.compilation.assets){
                assetNames.push(assetName)
            }
            console.log('打印编译内容',assetNames.join('\n'))
            // console.log(compilation.assets,'编译的资源')
            // 遍历所有编译过的资源文件，
            // 对于每个文件名称，都添加一行内容。
            for (var filename in state.compilation.assets) {
                filelist += '- ' + filename + '\n';
            }
            state.compilation.assets['fileList.md'] = {
                source:()=>{
                    return filelist
                },
                size:()=>{
                    return filelist.length
                }
            }

            // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
            // compilation.assets['filelist.md'] = {
            //     source: function() {
            //         return filelist
            //     },
            //     size: function() {
            //         return filelist.length
            //     }
            // };

            callback();
        });
    }
}

module.exports = FileListPlugin;