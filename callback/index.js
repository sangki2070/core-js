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
