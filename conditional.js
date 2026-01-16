const gajian = true;

console.log('Berjalan-jalan di mal');
if (gajian) {
  console.log('makan di restoran mal');
}

console.log('pulang ke rumah');

// const score = 80;
// if (score >= 80) {
//   console.log('Selamat, Anda lulus ujian!');
// } else {
//   console.log('Maaf, Anda belum lulus ujian.');
// }

const score = 85;

if (score > 90) {
  console.log('Selamat, Anda mendapatkan nilai A!');
} else if (score > 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}

// Ternary operator
const price = 100000;
const isMember = false;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

// Switch Case
// lebih readable dan dianjurkan jika ingin mengecek banyak kondisi

// const day = new Date().getDay();

// if (day === 0) {
//   console.log('Minggu');
// } else if (day === 1) {
//   console.log('Senin');
// } else if (day === 2) {
//   console.log('Selasa');
// } else if (day === 3) {
//   console.log('Rabu');
// } else if (day === 4) {
//   console.log('Kamis');
// } else if (day === 5) {
//   console.log('Jumat');
// } else if (day === 6) {
//   console.log('Sabtu');
// } else {
//   console.log('Hari tidak valid');
// }

// SWitch Case
const day = new Date().getDay();

switch (day) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;

  default:
    console.log('Hari tidak valid');
}
