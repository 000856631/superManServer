// console.log("hello world!");

var express = require("express");
var mapHandlers = require("./lib/mapHandler.js");
// var configs = require("./configs/server.json");

// console.log(process.env);

var app = express();  

app.use(express.static("html"));

app.get("/getmarks", mapHandlers.getAreaMarks);

app.get("/pickup/:key", mapHandlers.pickup);

var server = app.listen(8088, function(){
	console.log(`Server running at ${server.address().address}:${server.address().address}`);
});

// var server = http.createServer(function (request, response) {
//
// 	// 发送 HTTP 头部
// 	// HTTP 状态值: 200 : OK
// 	// 内容类型: text/plain
// 	response.writeHead(200, {'Content-Type': 'text/plain'});
//
// 	// 发送响应数据 "Hello World"
// 	response.end('Hello World\n');
// }).listen(8088);

// 终端打印如下信息
