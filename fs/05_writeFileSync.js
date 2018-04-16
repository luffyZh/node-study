// 同步写入文件,如果不存在文件会创建文件
const fs = require('fs');

const content = `jfskljdfkl付款是否快速了
发生纠纷抗裂砂浆；廊坊市开发建设卡了。发生九分裤
方式付款了时间反馈了就是打开了房间连接方式`;
try {
  fs.writeFileSync('../static/fs/writeFileSync.txt', content, 'utf-8');
  console.log('文件写入成功');
} catch (err) {
  console.error('写文件出错：', err.message);
}