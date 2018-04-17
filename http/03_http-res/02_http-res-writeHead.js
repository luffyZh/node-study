// 设置响应头部、状态码，返回状态等多种信息
const http = require('http');

let server = http.createServer(function(req, res){
    res.writeHead(200, 'ok', {
        'Content-Type': 'text/plain'
    });
    // 上面的writeHead等价于下面的三行代码
    // res.statusCode = 200;
    // res.statusMessage = 'ok';
    // res.setHeader('Content-Type', 'text/plain');
    res.end('hello');
});

server.listen(3000);