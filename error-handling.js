//  throw error : membangkitkan error untuk mengetahui program tidak mengalami crash
const price = 100;
const paid = 80;

if (paid < price) {
  throw new Error('Pembayaran Kurang');
}

// catching error
// try :merupakan blok kode yang akan menangani error,
// catch merupakan blok kode yang dibangkitkan ketika terjadi error di dalam blok try

try {
  console.log('Memulai program');
  throw new Error('Error : Program berhenti ');
  console.log('Mengakhiri program');
} catch (err) {
  console.log('Karena tidak ada error, blok ini akan diabaikan');
}

try {
  console.log('Ini try block');
  throw new Error('Error: Program berhenti');
} catch (err) {
  console.log('Ini catch block');
} finally {
  console.log('Ini finally block');
}
