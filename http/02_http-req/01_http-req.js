// 主要介绍http.IncomingMessage的实例req
// 服务端： 获取请求方的相关信息，如request，header等
// 客户端： 获取响应方返回的相关信息，如statusCode，statusMessage等
const http = require('http');

let server = http.createServer((req, res) => {
    console.log( '1、客户端请求url：' + req.url );
    console.log( '2、http版本：' + req.httpVersion );
    console.log( '3、http请求方法：' + req.method );
    console.log( '4、http请求头部' + JSON.stringify(req.headers) );
    res.end('ok');
});

server.listen(3333); // 使用浏览器打开并访问 http://localhost:3333/查看控制台输出

// 客户端例子，查看对应信息
http.get('http://127.0.0.1:3333/', (res) => {
    console.log('响应状态：' + res.statusCode);
    console.log('响应信息：' + res.statusMessage);
});