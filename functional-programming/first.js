const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// cara baca : “Ambil setiap name di names, ubah jadi name!, hasilkan array baru”
const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark);

// pure function :
// menghasilkan nilai yang sama setiap kali dipanggil dengan argumen sama
// tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut
