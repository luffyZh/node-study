// 压缩文件
const fs = require('fs');
const zlib = require('zlib');

const Gzip = zlib.createGzip();

let originFile = fs.createReadStream('../static/zlib/testGzip.txt');
let targetFile = fs.createWriteStream('../static/zlib/testGzip.txt.gz');
// 压缩或者解压数据流(例如一个文件)通过zlib流将源数据流传输到目标流中来完成。
// 从文件夹中查看，可以看出极大地减小了文件占据的空间
originFile.pipe(Gzip).pipe(targetFile);