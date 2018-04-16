// 创建目录，如果目录已经存在，会报错
const fs = require('fs');
// 1. 异步创建
fs.mkdir('./mkdir' , (err) => {
  if (err) throw err;
  console.log('目录创建成功');
})
// 2. 同步创建
try {
  fs.mkdirSync('./mkdirSync');
} catch (err) {
  throw err;
}