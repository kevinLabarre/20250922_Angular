function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result);

const sumFlechee = (a, b) => {
  console.log(this);
  return a + b;
};

result = sumFlechee(1, 2);
console.log(result);

const sumFlechee2 = (a, b) => a + b;
result = sumFlechee2(1, 2);
console.log(result);

const users = [
  { id: 1, name: 'John', age: 19 },
  { id: 2, name: 'Jane', age: 22 },
  { id: 3, name: 'Bob', age: 35 },
];

let youngs = users.filter((user) => user.age < 25);
console.log(youngs);

const youngs2 = users.filter((user) => {
  // conditions, traitements, calculs etc...

  return user.age < 25;
});

youngs = users.filter((user) => user.age < 25);
console.log(youngs);
