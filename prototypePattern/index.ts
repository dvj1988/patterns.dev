class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} barks`);
  }
}

const dog1 = new Dog("Rex");

// Prototype pattern
console.log(Dog.prototype.constructor);
console.log(Object.getPrototypeOf(dog1).constructor);

class SuperDog extends Dog {
  fly() {
    console.log(`${this.name} flies`);
  }
}

const dog2 = new SuperDog("Super Rex");
console.log(dog2.bark());

// Object.create
const dog3 = Object.create(dog1);
console.log(dog3.name);
console.log(dog3.bark());
