// menyebarkan niali yang ada pada object dan array, menggabubgkan 2 object
const obj1 = { name: 'Yuningrumzat' };
const obj2 = { lastName: 'Ayu', address: 'Jl.Kenanga No.5' };
const newObj = { ...obj1, ...obj2 };

console.log(newObj);

// mengcopy object
const originalObj = { name: 'arumzy', age: 17 };
const copiedObj = { ...originalObj };

console.log(copiedObj);

// array
const array1 = ['Yuningrumzat'];
const array2 = ['Indonesia', 'Jl Kenanga no 5'];
const newArray = [...array1, ...array2];
console.log(newArray);

const copy = [...array2];
console.log(copy);
