"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "anonymous";
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "getDescription",
    value: function getDescription() {
      return "name is " + this.name + " and age is " + this.age;
    }
  }]);

  return Person;
}();

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, degree) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

    _this.degree = degree;
    return _this;
  }

  _createClass(Student, [{
    key: "getCollageInfo",
    value: function getCollageInfo() {
      return "name is " + this.name + " and age is " + this.age + " and degree is " + this.degree;
    }
  }]);

  return Student;
}(Person);

var Traveler = function (_Student) {
  _inherits(Traveler, _Student);

  function Traveler(name, age, degree, state) {
    _classCallCheck(this, Traveler);

    var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age, degree));

    _this2.state = state;
    return _this2;
  }

  _createClass(Traveler, [{
    key: "getTest",
    value: function getTest() {
      return "name is " + this.name + " and " + this.age + " and " + this.degree + " and " + this.state;
    }
  }, {
    key: "addOn",
    value: function addOn() {
      var newTest = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), "getCollageInfo", this).call(this);

      return newTest += "Done";
    }
  }]);

  return Traveler;
}(Student);

var daniel = new Person("daniel", 29);
var other = new Traveler("kapper", 28, "CS", "MO");
var bob = new Student("gulcan", 29, "MBA");
var test = new Traveler("Allan", 25, "MSD");

console.log(test.addOn());

console.log(daniel.getDescription());
console.log(other.getDescription());
