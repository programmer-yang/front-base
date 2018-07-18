class Animal {
  constructor(props) {
    const { name, type } = props;
    this.name = name;
    this.type = type;
  }
  sayHi = () => {
    console.log(`Hello, 我是一只${this.type}, 我的名字叫${this.name}`);
  };
}

class Dog extends Animal {
  constructor(props) {
    super(props);
    const { characteristic } = props;
    this.characteristic = characteristic;
  }
  performance = () => {
    console.log(`我会${this.characteristic}`);
  };
}

const dog = new Dog({ name: "大毛", type: "金毛", characteristic: "玩球" });

dog.sayHi();
dog.performance();
