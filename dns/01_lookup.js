// lookup进行域名解析
const dns = require('dns');
/**
 * err: 错误信息
 * address: 解析后的地址
 * family: 只能是4或6，表示ipv4还是ipv6
 */
// 查询域名对应的一个ip
dns.lookup('www.youdao.com', (err, address, family) => {
  if (err) {
    throw err;
  }
  console.log('1.网易有道的ip地址是:', address);
});
// 查询域名对应的所有ip
const options = { all: true }; // 查询所有的ip
dns.lookup('www.youdao.com', options, (err, address, family) => {
  if (err) {
    throw err;
  }
  console.log('2.网易有道的ip地址是:', address);
});