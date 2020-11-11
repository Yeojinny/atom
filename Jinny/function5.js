var ok={
  k1:'v1',
  k2:'v2',
  f1:function f1(){
    console.log(this.k1); //this : 함수명이 변경되더라도 해당 함수에 속한다는 것을 알려쥼! k1의 값을 불러내는 함수
  },
  f2:function f2(){
    console.log(this.k2);
  }
}

ok.f1();
ok.f2();
