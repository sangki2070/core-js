// ******* 전역공간에서 호출시 *******

console.log(this); // 전역객체 (window/global)

// ******* 함수 호출시 *******

function a() {
  console.log(this); // 전역객체
}

function b() {
  console.log(this); // 전역객체
  function c() {
    console.log(this); // 이것도?.. b가 되어야 하지 않나?... 자바스크립트의 약간 설정오류 같은것, arrow function(this 바인딩 하지 않음)으로 해결됨
  }
  c();
}
b();

var d = {
  e: function () {
    function f() {
      console.log(this);
    }
    f(); // --> 이것도 마찬가지로 전역객체
  },
};

d.e();

// ******* 메서드 호출시 *******

var a = {
  b: function () {
    console.log(this);
  },
};

a.b(); // this는 a

var a = {
  b: {
    c: function () {
      console.log(this);
    },
  },
};

a.b.c(); // a.b 까지가 this

obj.funct();
obj["func"]();
person.info.getName();
person.info["getName"]();
person["info"].getName();
person["info"]["getName"](); // 대괄호 표기법 예시들

var a = 10;
var obj = {
  a: 20,
  b: function () {
    console.log(this.a); // 20
    function c() {
      console.log(this.a); // 10
    }
    c();
  },
};
obj.b();

var a = 10;
var obj = {
  a: 20,
  b: function () {
    var self = this;
    console.log(this.a);
    function c() {
      console.log(self.a);
    }
    c();
  },
};
obj.b();

var a = 10;
var obj = {
  a: 20,
  b: function () {
    var self = this;
    console.log(this.a);
    const c = () => {
      console.log(self.a);
    };
    c();
  },
};
obj.b();

// ******* callback 호출시 *******

function a(x, y, z) {
  console.log(this, x, y, z);
}

var b = {
  bb: "bbb",
};

a.call(b, 1, 2, 3);

a.apply(b, [1, 2, 3]);

var c = a.bind(b);
c(1, 2, 3);

var d = a.bind(b, 1, 2);
d(3);

var callback = function () {
  console.dir(this);
};

var obj = {
  a: 1,
  b: function (cb) {
    cb();
  },
};

obj.b(callback); // this는 윈도우 객체

var callback = function () {
  console.dir(this);
};

var obj = {
  a: 1,
  b: function (cb) {
    cb.call(this);
  },
};

obj.b(callback); // this는 obj

var callback = function () {
  console.dir(this);
};

var obj = {
  a: 1,
};

setTimeout(callback, bind(obj), 100);

document.body.innerHtml += '<div id="a">클릭하세요</div>';

document.getElementById("a").addEventListener("click", function () {
  console.dir(this);
}); // obj를 this로 하고 싶으면 bind.obj

// ******* 생성자함수 호출시 *******
function Person(n, a) {
  this.name = n;
  this.age = a;
}

var jay = Person("상기", 31);

function Person(n, a) {
  this.name = n;
  this.age = a;
}

var jay = new Person("상기", 31);
