var fs = require('fs')//파일 함수 호출
console.log('첫째에요');
var data = fs.readFile('sample.txt',{encoding: 'utf-8'},function(err,data){
  if(err) throw err;  //어싱크는 인수가3
  console.log(data);  // callback함수 문제가 생기면 err 문제안생기면data
});
//console.log(data);
console.log('셋째에요');
//이번에는 절차지향이 아님, 빨리 요청된 것부터 실행이 되서 첫째 셋째 둘째순이다.
