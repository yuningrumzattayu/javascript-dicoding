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
