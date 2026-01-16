// import { name, favoriteFood } from './module.mjs';

// console.log(name);
// console.log(favoriteFood);

// import function
import { name, favoriteFood as food } from './module.mjs';

console.log(name);
console.log(food);

import * as user from './module.mjs';

console.log(user.name);
console.log(user.favoriteFood);
user.sayHi(user.name);
