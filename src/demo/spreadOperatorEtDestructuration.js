const myTable = [1, 2, 3, 4, 5];
const myTable2 = [6, 7, 8, 9, 10];

console.log(myTable);
console.log(...myTable);

// Copie d'un tableau avec spread operator
const newTable = [...myTable];

const tableCombined = [...myTable, 11, 12, 13];
console.log(tableCombined);

const tableCombined2 = [...myTable, ...myTable2];
console.log(tableCombined2);

// Avec les objets
const user = {
  id: 1,
  name: 'John',
  age: 19,
};

const userCopie = { ...user };
console.log(userCopie);

// Pour renommer uniquement un attribut + pour ajouter la propriété 'city'
const user2 = { ...user, name: 'Jane', city: 'Paris' };
console.log(user2);

// Avec les fonctions
const sum = (initialValue, ...numbers) => {
  let total = initialValue;
  numbers.forEach((n) => (total += n));
  return total;
};

console.log('Résulat somme: ', sum(1, 3, 5, 6, 45, 6, 12, 3, 5));

// Destructuration sur les tableaux
const names = ['Riri', 'Fifi', 'Loulou'];

const [name1, name2] = names;
console.log(name1);
console.log(name2);

// Equivalent:
// const name1 = names[0];
// const name2 = names[1];

const [name4, ...rest] = names;
console.log('name4: ', name4);
console.log('rest: ', rest);

// Destructuration sur les objets
const destructuredUser = {
  id: 1,
  name: 'John',
  age: 19,
};

const { name, age } = destructuredUser;
console.log(name, age);

// Destrucutration + nommage des variables
const { name: destructuredName, age: destructuredAge } = destructuredUser;
console.log(destructuredName, destructuredAge);
