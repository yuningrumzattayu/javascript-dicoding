// array dengan object constructor
const users = new Array();
const numbers = new Array(5);

console.log(users);

// array from

const people = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(people);
console.log(customer);

//Array literals
const fruits = ['apple', 'banana', 'cherry', '', 'grape'];
console.log(fruits);

// Mengakses element array
const myArray = [42, 50, 51];
console.log(myArray[1]);

// Manipulasi Array
let myNumber = [1, 2, 3, 4, 5];
myNumber[2] = 10;
console.log(myNumber);

// Menambahkan Array
myNumber.push(6);
console.log(myNumber);

// // menghapus element dan data array
let myField = ['Android', 'Data Science', 'Web'];
// delete myField[1];
// console.log(myField);

//Menghapus element indeks ke-1, element yang dihapus adalah 2
myField.splice(1, 2);
console.log(myField);

// Array Destructuring
const introduction = ['Hello', 'Arum'];
const [greeting, name] = introduction;
console.log(greeting);

// Array Method
// Reverse = membalikkan nilai
myField.reverse();
console.log(myField);

// Sort = Ascending
myField.sort();
console.log(myField);
