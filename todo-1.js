// TODO: buatlah variabel (konstan) bernama `currency` dan isi dengan nilai "IDR".
const currency = 'IDR';

// TODO: buatlah variabel bernama `value` dan isi dengan nilai 10000.
let value = 10000;

// TODO: tambahkan nilai di dalam variabel `value` sebesar 5000.
value = value + 5000;

/**
 * TODO: buatlah variabel (konstan) bernama `money`,
 * isi dengan penambahan string dari nilai `currency` + " " + `value`.
 */

const money = currency + ' ' + value;
console.log(money);

const employees = [
  {
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  const newEmployee = { name, email, joinYear };
  employees.push(newEmployee);

  //  * @TODO
  //  * lengkapi fungsi ini agar dapat menambahkan objek employee baru
  //  * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
  //  *
}

addEmployee('yuningrumzat', 'ningrumzty@gamil.com', 2021);
console.log(employees);
