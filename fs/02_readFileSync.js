const fs = require('fs');
// 同步读取文件
let data;

try {
  data = fs.readFileSync('../static/fs/readFile.txt', 'utf-8');
  console.log(data);
} catch (err) {
  console.error('读取文件出错:'+err.message);
}