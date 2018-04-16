// 删除文件
const fs = require('fs');
// 异步删除文件
fs.unlink('./mkdir/delete.txt', function(err){
  if(err) throw err;
  console.log('文件删除成功');
});

// 同步删除文件
try{
  fs.unlinkSync('./mkdirSync/delete.txt');
  console.log('文件删除成功');
} catch (err) {
  throw err;
}