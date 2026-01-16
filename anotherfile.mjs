export default function myFunction() {
  console.log('Ini adalah function export default');
}

const name = 'John';
const email = 'john@gmail.com';
const age = 25;

export { name, email, age };

// export default function sayHi(){
//   console.log('Hai, ini default export dari anotherfile.mjs')
// }

// export default function sayGoodBye(){
//   console.log('Bye, ini default export dari anotherfile.mjs')
// }
