// Array Map
// Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.
const oldArray = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newArray = oldArray.map((name) => `${name}!`);

console.log(newArray);
console.log(oldArray);

//Array Filter :  fungsi ini harus mengembalikan boolean
const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  },
];

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score > 85
);
console.log(eligibleForScholarshipStudents);

// Array Reduce
//  mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);
