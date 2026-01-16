// Harus meng-import function/method tersebut.
// Function/method tersebut sudah di-export
import myFunction from './anotherfile.mjs';

myFunction();

// namanya tidak harus sama dengan function/method/variable
import result from './anotherfile.mjs';
result();

// named import : nama function harus sesuai. untuk mengimpor dari suatu modul yang memiliki banyak function/method/variable yang di-export
import { name, email, age } from './anotherfile.mjs';

console.log(name);
console.log(email);
console.log(age);

//  Import * dapat dilakukan ketika function/method/variable yang ingin kita impor dari modul yang sama sangat banyak.
import * as variable from './anotherfile.mjs';
console.log(name);
console.log(email);
console.log(age);

// as : alias mengubah nama dari function/method/variable yang berasal dari modul lain menjadi nama yang kita inginkan.
import { myFunction as userFunction } from './user.mjs';
import { myFunction as customerFunction } from './customer.mjs';

userFunction();
customerFunction();
