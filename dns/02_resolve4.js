// 通过resolve4或resolve6来解析域名
var dns = require('dns');

dns.resolve4('www.qq.com', function(err, address){
    if(err) throw err;
    console.log( JSON.stringify(address) );
});
// 解析域名为ipv6格式，如没有返回空
dns.resolve6('www.google.com', function(err, address){
  if(err) throw err;
  console.log( JSON.stringify(address) );
});