import { makeCoffee, sendCoffee } from '../asynchronous-process/coffee.mjs';

const order = 'Kopi Espresso';

console.log(`Saya Memesan ${order} di kafe`);

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
  if (makeCoffeeError) {
    console.error(makeCoffeeError);
    return;
  }

  sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
    if (sendCoffeeError) {
      console.error(sendCoffeeError);
      return;
    }

    console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan`);
    console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya`);
  });
});
