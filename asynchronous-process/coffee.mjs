export function makeCoffee(name, callback) {
  // 1000 milidetik = 1 detik
  const estimationTime = 5000;
  let isSuccess = false;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(
    `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
  );

  setTimeout(() => {
    // penentuan hasil proses asinkron

    const number = Math.random();

    if (number > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      // default js callback (Error, data)
      callback(new Error('Gagal Membuatkan Kopi'), null);
      return;
    }
    // do some tasks to make coffee
    console.log('Pramusaji selesai membuat kopi');
    callback(null, name);
  }, estimationTime);
}

export function sendCoffee(name, callback) {
  const estimationTime = 2000;
  let isSuccess = false;

  console.log('Pramusaji sedang mengantarkan kopi pesanan');

  setTimeout(() => {
    const number = Math.random();

    if (number > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      callback(new Error('Gagal mengantarkan kopi.'), null);
      return;
    }
    // do some tasks to send coffee
    console.log('Pramusaji sudah sampai ke meja.');
    callback(null, name), estimationTime;
  });
}
