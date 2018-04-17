// 创建一个简单的http-server
const http = require('http');
// 创建一个http-server，node创建server非常简单，几行代码就可以
let server = http.createServer((serverReq, serverRes) => {
  let url = serverReq.url;
  console.log('您访问的url是：' + url);
});
// 设置server的监听窗口
server.listen(3333);

// http client 例子
let client = http.get('http://127.0.0.1:3333', (clientRes) => {
    clientRes.pipe(process.stdout);
});

// server：http.Server实例，用来提供服务，处理客户端的请求。
// client：http.ClientReques实例，用来向服务端发起请求。
// serverReq/clientRes：其实都是 http.IncomingMessage实例。serverReq 用来获取客户端请求的相关信息，如request header；而clientRes用来获取服务端返回的相关信息，比如response header。
// serverRes：http.ServerResponse实例

//  http.ServerResponse 实例。作用很明确，服务端通过http.ServerResponse 实例，
// 来给请求方发送数据，包括发送响应表头，发送响应主体等。

// http.IncomingMessage
// 在server端：获取请求发送方的信息，比如请求方法、路径、传递的数据等。 
// 在client端：获取 server 端发送过来的信息，比如请求方法、路径、传递的数据等。