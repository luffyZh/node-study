// 客户端请求的任何事都是与http-client相关

const http = require('http');
// 请求参数
const options = {
    protocol: 'http:',
    hostname: 'id.qq.com',
    port: '80',
    path: '/',
    method: 'GET'
};
// 创建一个客户端请求，请求qq首页，将请求结果控制台输出
let client = http.request(options, (res) => {
    let data = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        data += chunk;
    });
    res.on('end', function(){
        console.log(data);
    });
});
// 如果为get可以使用更简单的方法
// http.get('http://www.baidu.com/', function(res){
//     var data = '';
//     res.setEncoding('utf8');
//     res.on('data', function(chunk){
//         data += chunk;
//     });
//     res.on('end', function(){
//         console.log(data);
//     });
// });

client.end();
