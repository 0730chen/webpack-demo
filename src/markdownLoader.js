const fs = require('fs')
const path = require('path')
module.exports = function (source) {
    // console.log(typeof source, source)
    // let callback = this.async()
    // let headerPath = path.resolve('markdown.html')
    // this.addDependency(headerPath)
    // // return result
    let title = source.replace(/#+/,'')
    console.log(title);
    let string = fs.readFileSync('./markdown.html').toString()
    //要对字符串中的换行进行处理
    let rex = /\\/g
    let result = string.replace('{{markdown.title}}', source).replace('{{markdown-content}}',title)
    let string2 = result.replace(rex,'')
    console.log(string2);
    fs.writeFile(`./html/${title}.html`,string2,'utf8',function(error){
        if(error){
            console.log(error);
            return false;
        }
        console.log('写入成功');
    })
    return `module.exports = `+JSON.stringify(result)
}