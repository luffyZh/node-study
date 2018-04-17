// 获取客户端接收到的响应信息
const http = require('http');

// 服务端server
const server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/plain',});
    res.end('server is ok');
});
server.listen(3333);
// 客户端发送请求,并打印response信息
const client = http.get('http://127.0.0.1:3333', (res) => {
    console.log('1、http版本：' + res.httpVersion);
    console.log('2、返回状态码：' + res.statusCode);
    console.log('3、返回状态描述信息：' + res.statusMessage);
    console.log('4、返回正文：');
    // 重定向res的输出为标准输出
    res.pipe(process.stdout); // 标准输出响应的正文
});
