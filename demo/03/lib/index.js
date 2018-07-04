"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dog = function () {
  function Dog(name, color) {
    _classCallCheck(this, Dog);

    this.name = name;
    this.color = color;
  }

  _createClass(Dog, [{
    key: "sayHi",
    value: function sayHi() {
      console.log("hello, my name is " + this.name + ", i'm " + this.color);
    }
  }]);

  return Dog;
}();

new Dog("大毛", "金色").sayHi();