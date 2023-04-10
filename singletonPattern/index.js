class Counter {
  static instance;
  #count = 0;

  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    }

    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.#count;
  }

  increment() {
    return this.#count++;
  }

  decrement() {
    return this.#count--;
  }
}

const counter1 = new Counter();
console.log(counter1.getCount()); // 0
counter1.increment();
console.log(counter1.getCount()); // 1

const counter2 = new Counter();
console.log(counter2.getCount()); // 1
console.log(counter1.getCount()); // 1
