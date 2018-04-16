const fs = require('fs');
// 异步读取
fs.readFile('../static/fs/readFile.txt', 'utf-8', (err, data) => {
  if (err) {
    return console.error('读取文件内容出错：'+err.message);
  }
  console.log('文件内容：', data);
})