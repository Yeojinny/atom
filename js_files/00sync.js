var fs = require('fs')//파일 함수 호출
console.log('첫째에요');
var data = fs.readFileSync('sample.txt',{encoding: 'utf-8'}) //싱크는 절차지향
console.log(data);
console.log('셋째에요');
