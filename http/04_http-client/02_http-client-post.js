// 简单的一个server，客户端发送post请求并由server回传相应信息
const http = require('http');
const querystring = require('querystring');
// 模拟一个客户端请求
let createClientPostRequest = () => {
    const options = {
        method: 'POST',
        protocol: 'http:',
        hostname: '127.0.0.1',
        port: '3333',
        path: '/post',
        headers: {
            "connection": "keep-alive",
            "content-type": "application/x-www-form-urlencoded"
        }    
    };

    // 发送给服务端的数据
    let postBody = {
        name: 'luffy zhou'
    };

    // 创建客户端请求
    let client = http.request(options, (res) => {
        // 最终输出：Server got client data: name=luffy zhou
        res.pipe(process.stdout);  
    });

    // 发送的报文主体，记得先用 querystring.stringify() 处理下
    client.write(querystring.stringify(postBody));
    client.end();
};

// 服务端程序，只是负责回传客户端数据
var server = http.createServer((req, res) => {
    res.write('Server got client data: ');
    req.pipe(res);
});

server.listen(3333, createClientPostRequest);