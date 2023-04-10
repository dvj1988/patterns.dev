// Proxy pattern

const person = {
  name: "John Doe",
  age: 25,
  nationality: "American",
};

const proxyPerson = new Proxy(person, {
  get(target, property) {
    return Reflect.get(target, property);
  },

  set(target, property, value) {
    if (property === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("Age must be an integer");
      }
      if (value > 200) {
        throw new RangeError("Age must be less than 200");
      }
    }

    if (property === "name") {
      if (value.length > 10) {
        throw new RangeError("Name must be less than 10 characters");
      }

      if (!value.match(/^[a-zA-Z]+$/)) {
        throw new TypeError("Name must be only letters");
      }
    }

    Reflect.set(target, property, value);
  },
});

console.log(proxyPerson.name); // John Doe
console.log(proxyPerson.age); // 25
console.log(proxyPerson.nationality); // American

try {
  proxyPerson.age = "twenty five"; // TypeError: Age must be an integer
} catch (err) {
  console.log(err.message);
}

try {
  proxyPerson.age = 250; // RangeError: Age must be less than 200
} catch (err) {
  console.log(err.message);
}

proxyPerson.age = 24;
console.log(proxyPerson.age); // 24
