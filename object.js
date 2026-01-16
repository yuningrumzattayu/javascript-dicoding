const user = {
  name: 'Dicoding',
  'last name': 'Indonesia',
  lastName: 'Maju',
  age: 9,
};

console.log(user['last name']);

// object destructuring
const { name, lastName } = user;
console.log(name, lastName);

// mempermudah mengakses properti jika banyak
const people = {
  id: 24,
  email: 'aras@dicoding.com',
  name: 'Arsy',
  nickname: 'Aras',
  username: 'aras123',
  password: 'secret',
};

const { id, email } = people;
console.log(id, email);

// mengubah nilai di properti object

people.name = 'Arum';
console.log(people.name);

// menghapus nilai di properti object
delete people.nickname;
console.log(people);
