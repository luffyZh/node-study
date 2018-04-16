// 通过文件流读取文件，适合读取大型文件
const fs = require('fs');

let readStream = fs.createReadStream('../static/fs/readFile.txt', 'utf-8');

readStream
  .on('data', (thunk) => {
    console.log('读取数据:'+thunk);
  })
  .on('error', (err) => {
    console.error('读取文件错误', err.message);
  })
  .on('end', () => {
    console.log('读取文件结束');
  })
  .on('close', () => {
    console.log('文件流已关闭');
  });
  