function myFunc(number, ...name) {
  console.log('number', number);
  console.log('name:', name);
  console.log(name.length);
}

//argument sebagai array
myFunc('one', 'ningrum', 'rumzy');

// destructuring
const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];
const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);
