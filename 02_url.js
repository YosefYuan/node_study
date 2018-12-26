// 1. 引入 url 模块
var url = require("url");

// 2. 引入 http 模块
var http = require("http");

// 3. 用 http 模块创建服务
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */
http.createServer(function (req, res) {

  // 4. 获取服务器请求
  /**
   * 访问地址是：http://localhost:3000/?userName=jsliang&userAge=23
   * 如果你执行 console.log(req.url)，它将执行两次，分别返回下面的信息：
   * /  ?userName=jsliang&userAge=23
   * /  /favicon.ico
   * 这里为了防止重复执行，所以排除 req.url == /favicon.ico 的情况
   */
  if (req.url != "/favicon.ico") {

    // console.log(url.parse("http://www.baidu.com"));
    // console.log(url.parse("http://www.baidu.com/new?name=zhangsan"));

    // console.log(url.format({
    //   protocol: 'http:',
    //   slashes: true,
    //   auth: null,
    //   host: 'www.baidu.com',
    //   port: null,
    //   hostname: 'www.baidu.com',
    //   hash: null,
    //   search: '?name=zhangsan',
    //   query: 'name=zhangsan',
    //   pathname: '/new',
    //   path: '/new?name=zhangsan',
    //   href: 'http://www.baidu.com/new?name=zhangsan'
    // }))

    console.log(url.resolve("http://www.baidu.com/jsliang", "梁峻荣"));
  }

  // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  });

  // 往页面打印值
  res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

  // 结束响应
  res.end();

}).listen(3000);