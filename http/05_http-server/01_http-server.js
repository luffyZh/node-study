// http-server 可以用来快速起一个本地服务器
// 这个例子只是测试当http头部设置与不设置keep-alive的区别
const http = require('http');

let requestIndex = 0;
let connectionIndex = 0;

let server = http.createServer(function(req, res){
    res.end('ok');
});

server.on('request', function(req, res){
    requestIndex++;
    console.log('request event: 第'+ requestIndex +'个请求！');
});

server.on('connection', function(req, res){
    connectionIndex++;
    console.log('connection event: 第'+ connectionIndex +'个请求！');
});

server.listen(3333);

/* 结果——使用postman来模拟发送请求 */

// 1.没有keep-alive的情况下,发送三次
// connection event: 第1个请求！
// request event: 第1个请求！
// connection event: 第2个请求！
// request event: 第2个请求！
// connection event: 第3个请求！
// request event: 第3个请求！

// 2.有keep-alive的情况下，发送三次

// connection event: 第1个请求！
// request event: 第1个请求！
// request event: 第2个请求！
// request event: 第3个请求

// 可以发现只进行了一次链接，之后直接响应请求，大大的提高了效率


