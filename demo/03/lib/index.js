"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function Animal(props) {
  var _this = this;

  _classCallCheck(this, Animal);

  this.sayHi = function () {
    console.log("Hello, \u6211\u662F\u4E00\u53EA" + _this.type + ", \u6211\u7684\u540D\u5B57\u53EB" + _this.name);
  };

  var name = props.name,
      type = props.type;

  this.name = name;
  this.type = type;
};

var Dog = function (_Animal) {
  _inherits(Dog, _Animal);

  function Dog(props) {
    _classCallCheck(this, Dog);

    var _this2 = _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, props));

    _this2.performance = function () {
      console.log("\u6211\u4F1A" + _this2.characteristic);
    };

    var characteristic = props.characteristic;

    _this2.characteristic = characteristic;
    return _this2;
  }

  return Dog;
}(Animal);

var dog = new Dog({ name: "大毛", type: "金毛", characteristic: "玩球" });

dog.sayHi();
dog.performance();