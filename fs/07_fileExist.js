// 判断文件是否存在
// 以前通过fs.exist();来判断，但是这个API已经被废弃
// 现在可以通过fs.access()来判断文件是否存在
const fs = require('fs');
// 已存在的文件
fs.access('../static/fs/readFile.txt', function(err){
  if(err) throw err;
  console.log('readFile.txt存在');
});
// 一个不存在的文件
fs.access('./fileForRead.txt', function(err){
    if(err.code === 'ENOENT') {
     return console.log('文件不存在');
    };
    console.log('fileForRead.txt存在');
});