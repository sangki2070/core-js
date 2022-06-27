//Class 예시

function Person(name, age) {
  this._name = name;
  this._age = age;
}
//static method
Person.getInformations = function (instance) {
  return {
    name: instance._name,
    age: instance._age,
  };
};

//prototype method

Person.prototype.getName = function () {
  return this._name;
};

Person.prototype.getAge = function () {
  return this._age;
};

var jay = new Person("제이", 30);

console.log(roy.getName());
console.log(roy.getAge());

//static method는 생성자 함수에 직접 접근해야 결과를 얻을수 있음
console.log(roy.getInformations(roy));

console.log(Person.getInformations(roy));

// 클래스 상속 예시 (상속 구현전)

function Person(name, age) {
  this.name = name || "이름없음";
  this.age = age || "나이모름";
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getAge = function () {
  return this.age;
};

function Employee(name, age, position) {
  this.name = name || "이름 없음";
  this.age = age || "나이 모름";
  this.position = position || "직책 모름";
}

Employee.prototype.getName = function () {
  return this.name;
};

Employee.prototype.getAge = function () {
  return this.age;
};

Employee.prototype.getPosition = function () {
  return this.position;
};

// 상속 구현

function Person(name, age) {
  this.name = name || "이름없음";
  this.age = age || "나이모름";
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getAge = function () {
  return this.age;
};

function Employee(name, age, position) {
  this.name = name || "이름 없음";
  this.age = age || "나이 모름";
  this.position = position || "직책 모름";
}
//prototpye 연결
Employee.prototype = new Person();

//constructor 지정
Employee.prototype.constructor = Employee;

//새로운 프로토타입 연결 다음에 새로운 인스턴스 지정
Employee.prototype.getPosition = function () {
  return this.position;
};

var jay = new Employee("로이", 30, "CEO");

// Bridge 추가 후 쓸모없는 프로퍼티를 지운 버전

function Person(name, age) {
  this.name = name || "이름없음";
  this.age = age || "나이모름";
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getAge = function () {
  return this.age;
};

function Employee(name, age, position) {
  this.name = name || "이름 없음";
  this.age = age || "나이 모름";
  this.position = position || "직책 모름";
}

function Bridge() {}

Bridge.prototype = Person.prototype;
Employee.prototype = new Bridge();
Employee.prototype.constructor = Employee;

//Es6 버전

class Person {
  constructor(name, age) {
    this.name = name || "이름없음";
    this.age = age || "나이모름";
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position || "직책 모름";
  }
  getPosition() {
    return this.position;
  }
}
