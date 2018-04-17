// writeHead设置响应头和setHeader设置响应头的差异
// res.writeHead() 不单单是设置header。
// 已经通过 res.setHeader() 设置了header，当通过 res.writeHead() 设置同名header，res.writeHead() 的设置会覆盖之前的设置。
const http = require('http');
// 第一种，先用setHeader再用writeHead，setHeader的值会被writeHead覆盖

let server = http.createServer(function(req, res){
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, 'ok', {
        'Content-Type': 'text/plain'
    });
    res.end('hello');
});
// 第二种先用writeHead再用setHeader，会报错，报错信息为 Error: Can't set headers after they are sent.
let server = http.createServer(function(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200, 'ok', {
      'Content-Type': 'text/plain'
  });
  res.end('hello');
});


server.listen(3000);