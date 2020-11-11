var arr=['johndoe','male','age'] //

var o={
  'name':'johndoe',  //키&값
  'gender':'female',
  'age':'20'
}
for(var x in o){ //o라는 객체안에 있는 속성들을 차례로 x에 담는다.
  console.log(x,o[x]);  //x : 키출력 o[x]:값출력
}
console.log(o.name,o['name']);
