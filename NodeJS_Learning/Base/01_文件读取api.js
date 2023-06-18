const fs = require('fs')

// 同步读取
// const res = fs.readFileSync('../abc.text', {
//     encoding: 'utf8'
// })

// console.log("--文件内容:",res);

//2.异步读取， 回调函数
// fs.readFile('../abc.text', {
//     encoding: 'utf8'
// }, (err, data)=> {
//     if(err) {
//         console.log("--读取文件错误:", err);
//         return
//     }
//     console.log("读取文件结果:", data);
// })

// console.log("---后续的代码。");

//3.异步读取：Promise
fs.promises.readFile('../abc.text', {
    encoding: 'utf-8'
}).then(res => {
    console.log("获取到结果:",res);
}).catch(err => {
    console.log("--读取错误:", err);
})