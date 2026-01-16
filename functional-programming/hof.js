// (High-Order Function)
//  fungsi yang menerima fungsi lainnya sebagai argumen dan/atau mengembalikan sebuah fungsi lain.

function apply(operation, ...args) {
  // kita bisa menambahkan kode lain sebelum operation dijalankan.

  return operation(...args);
}

function sum(a, b, c) {
  return a + b + c;
}

function discount(disc, value) {
  return value - (disc / 100) * value;
}

const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log('Product Price:', productPrice);
console.log('with discount 25% : ', withDiscount);

// Teknik Currying : mengambil satu argumen dulu, lalu mengembalikan sebuah fungsi baru yang menerima argumen kedua, begitu seterusnya hingga seluruh argumen dimanfaatkan dan melakukan operasi secara utuh.

function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}`;
  };
}

function multipleBy(x) {
  return function (y) {
    return x * y;
  };
}

const coolifier = adjectivfy('Keren');
const funnifier = adjectivfy('Seru');

const multipleByFive = multipleBy(5);

console.log(coolifier('Dicoding'));
console.log(funnifier('Javascript'));
console.log(multipleByFive(7));
console.log(multipleByFive(10));
