function promiseExecutor(resolve, reject) {
  // proses async
  setTimeout(() => {
    // pending Call stack boleh koson, Program tetap lanjut
    console.log('Melakukan sesuatu sebelum promise diselesaikan');

    // Penentuan hasil dari proses asinkron
    const number = Math.random();

    // Nilai fulfillment dari Promise
    if (number > 0.5) {
      resolve('You Did It!');

      // Nilai rejection dari Promise
    } else {
      reject('Sorry, Something Went Wrong');
    }
  }, 2000);
}

export function doSomething() {
  return new Promise(promiseExecutor);
}
