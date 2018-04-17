// 一个web服务程序，接受到来自客户端的http请求后，
// 向客户端返回正确的响应内容，这就是res的职责。
const http = require('http');
//一个最简单的server
let server = http.createServer((req,res) => {
  res.send('ok'); // 通过res响应结果
});

server.listen(3333);
