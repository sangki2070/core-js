// Closure?

var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner();
};

var outer2 = outer();
console.log(outer2());
console.log(outer2());

// outer에서 선언한 변수 a를 참조하는 inner를 outer 외부에서 실행하였더니 outer가 종료된 이후에도 a가 계속 살아 있게 된다.

function user(_name) {
  var _logged = true;

  return {
    get name() {
      return _name;
    },
    set name(v) {
      _name = v;
    },
    login() {
      _logged = true;
    },
    logout() {
      _logged = false;
    },
    get status() {
      return _logged ? "login" : "logout";
    },
  };
}

var jay = user("무무");

console.log(jay.name); // 무무 (함수가 죽어도 변수는 살아있는것)

jay.name = "모모";

console.log(jay.name); // 모모

console.log(jay.status); // login

jay.logout();
console.log(jay.status); // logout

jay.status = true;
console.log(jay.status); // login
