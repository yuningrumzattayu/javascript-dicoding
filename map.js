// sama kaya object tapi dia key valuenya bisa number dan string
const productMap = new Map([
  ['shoes', 500],
  ['cap', 350],
  ['jeans', 250],
]);

console.log(productMap);

// menyimpan nilai map
const map = new Map();
map.set('name', 'aras');
console.log(map);
console.log(map.get('name'));

//menghapus nilai map
map.set('last name', 'opraza');
map.delete('last name');
console.log(map);
