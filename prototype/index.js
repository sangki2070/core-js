//prototype

function Person(n, a) {
  this.name = n;
  this.age = a;
}

var jay = new Person("제이", 30);

var jayCone1 = new jay.__proto__.constructor("제이_클론1", 10);

var jayCone2 = new jay.constructor("제이_클론2", 25);

var jayCone3 = new jay.Object.getPrototypeOf(jay).constructor("제이_클론1", 10);

var jayCone4 = new Person.prototype.constructor("제이_클론1", 10);

//jay라는 원본과 clone들은 모두 Person의 인스턴스(모두 동일한 프로퍼티에 접근할수 있기 때문)

//메서드 상속 및 동작 원리

function Person(n, a) {
  this.name = n;
  this.age = a;
}

var jay = new Person("제이", 30);
var mumu = new Person("무무", 25);

jay.setOlder = function () {
  this.age += 1;
};

jay.getAge = function () {
  return this.age;
};

mumu.setOlder = function () {
  this.age += 1;
};

mumu.getAge = function () {
  return this.age;
};

//prototype 이용해보기

function Person(n, a) {
  this.name = n;
  this.age = a;
}

Person.prototype.setOlder = function () {
  this.age += 1;
};

Person.prototype.getAge = function () {
  return this.age;
};
var jay = new Person("제이", 30);
var mumu = new Person("무무", 25);

jay.setOlder();

jay.getAge();

mumu.setOlder();

mumu.getAge();

//prototype으로 인해 반복하지 않고 코드 작성 가능
