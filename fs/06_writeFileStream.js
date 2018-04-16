// 以流的形式写入文件
const fs = require('fs');
const content = `jfskljdfkl付款是否快速了
发生纠纷抗裂砂浆；廊坊市开发建设卡了。发生九分裤
方式付款了时间反馈了就是打开了房间连接方式`;
const writeStream = fs.createWriteStream('../static/fs/writeFileStream.txt', 'utf-8');

writeStream.on('close', () => {
  console.log('窗口关闭'); //不再有任何事件抛出
})
writeStream.write(content);
writeStream.end(''); //写入结束


