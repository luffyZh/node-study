// 获取GET请求的参数
const http = require('http');
const url = require('url'); // 用于解析url
const querystring = require('querystring');// 用于解析请求的参数

let server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url);
    const query = urlObj.query;
    const queryObj = querystring.parse(query);
    // 打印参数
    console.log(JSON.stringify(queryObj) );
    res.end('<div style="color:green">success</div>');
});

server.listen(3333);
// 浏览器访问 localhost:3333/?name=luffy&age=24