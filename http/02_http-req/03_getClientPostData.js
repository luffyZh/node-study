// 获取POST请求的请求体
const http = require('http');
const url = require('url');
const querystring = require('querystring');

let server = http.createServer((req, res) => {
    let body = '';  
    req.on('data', function(thunk){
        body += thunk;
    });
    req.on('end', function(){
        console.log( 'post body is: ' + body );
        res.end('ok');
    }); 
});

server.listen(3333);
// 使用curl构造POST请求
// curl -d "name=luffy&age=24" "http://127.0.0.1:3333"
// 使用curl命令格式必须是双引号
// curl下载地址 https://www.cnblogs.com/xing901022/p/4652624.html