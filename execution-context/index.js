// 실행컨텍스트 예제 1

var a = 1;

function outer() {
  console.log(a);
  function inner() {
    console.log(a);
    var a = 3;
  }
  inner();
  console.log(a);
}

outer();

console.log(a);

//호이스팅 예제

console.log(a());
console.log(b());
console.log(c());

function a() {
  return "a";
}

var b = function bb() {
  return "bb";
};

var c = function () {
  return "c";
};

// 호이스팅 된다면 아래와 같은 상태로 저장됨

function a() {
  return "a";
}

// 호이스팅시 함수의 경우 함수 전체가 호이스팅됨

var b;
var c;

console.log(a());
console.log(b());
console.log(c());

var b = function bb() {
  return "bb";
};

var c = function () {
  return "c";
};

// 위 정보들이 environmenRecord 실행 컨텍스트가 실행시 가장 먼저 실행하는것.
