class User {
  firstName;
  lastname;
  #age;

  constructor(firstName, lastname, age) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.age = age;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastname;
  }

  set age(value) {
    if (value < 18) {
      throw new Error('Age must be >= 18');
    }
    this.#age = value;
  }

  get age() {
    return this.#age;
  }
}

const user = new User('John', 'Doe', 17);
console.log(user);

const fullName = user.fullName;
console.log(fullName);

user.age = 15;
console.log(user.age);
