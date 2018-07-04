class Dog {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  sayHi() {
    console.log(`hello, my name is ${this.name}, i'm ${this.color}`);
  }
}

new Dog("大毛", "金色").sayHi();
