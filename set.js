// set bernilai unik tidak ada data yang duplikat
// const set = new Set([1, 2, 3]);
// console.log(set);

// menyimpan nilai di set
const fruit = new Set();
fruit.add(1);
fruit.add('apple');
fruit.add(2);
fruit.add('lemon');

console.log(fruit);

// Mengakses nilai set menggunakan looping
for (const number of fruit) {
  console.log(number);
}

fruit.forEach((value) => console.log(value));

// Menghapus nilai set
fruit.delete(1);
console.log(fruit);
