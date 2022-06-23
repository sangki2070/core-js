// ******* 제어권 위임의 예시 *******
//setInterval

var cb = function () {
  console.log("초마다 실행");
};

setInterval(cb, 1000);

//setInterval에게 cb의 제어권을 넘겨줘서 setInterval이 실행함

// ******* 매개변수의 예시 *******

var arr = [1, 2, 3, 4, 5];

var entries = [];

arr.forEach(
  function (v, i) {
    entries.push([i, v, this[i]]);
  },
  [10, 20, 30, 40, 50]
);

console.log(entries);

//forEach method에는 첫번째 인는 콜백, 2번째 인는 thisArg
//그래서 this는 [10,20,30,40,50]이 된다.

// this

document.body.innerHtmL = '<div id="a">abc</div>';

function cbFunc() {
  console.log(this, x);
}

document.getElementById("a").addEventListener("click", cbFunc);

// 주의점

var arr = [1, 2, 3, 4, 5];

var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    if (this.vals) {
      console.log(this.vals, v, i);
    } else {
      console.log(this, v, i);
    }
  },
};

obj.logValues(1, 2); // 메서드로 호출 this = obj
arr.forEach(obj.logValues); // 콜백 함수로 넘긴것, this = window 객체

//this를 obj로 하고싶다면?
arr.forEach(obj.logValues, obj);
arr.forEach(obj.logValues.bind(obj));
