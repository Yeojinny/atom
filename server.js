// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//var http = require('http')
//var server = http.createServer();
var express = require('express')  //웹 페이지 나누기?
var app = express()
//server.on('request', doRequest);
//server.listen(3003);
//console.log('starting server!!')
//function doRequest(req,res){
//res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'})
//res.write('안녕 지니 서버여')
//res.end();
//}
app.use(express.static('data'));
app.get('/',function(req,res){ //app.get: express명령어?
  res.send('<h1>여기는<br>메인 페이지입니다.<h1>')  //html에서 뉴라인역할<br>
}); // /나의 위치? //입출력 연결
app.get('/topic',function(req,res){
  res.send('여기는 topic 페이지입니다')
});
app.get('/dynamic',function(req,res){
  var sp = ''; //빈문자열
  for(var i=0;i<10;i++){
    for(var month=1;month<=12;month++){
    sp=sp+`$(month)월`
    }
  }
  res.send(sp)
});
app.listen(3003,function(){
  console.log('server running 3003 port');
})
