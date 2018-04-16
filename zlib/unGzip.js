// 解压缩文件
const fs = require('fs');
const zlib = require('zlib');

const Gunzip = zlib.createGunzip();

let originFile = fs.createReadStream('../static/zlib/testGzip.txt.gz');
let targetFile = fs.createWriteStream('../static/zlib/textUnGzip.txt');
// 压缩或者解压数据流(例如一个文件)通过zlib流将源数据流传输到目标流中来完成。
originFile.pipe(Gunzip).pipe(targetFile);