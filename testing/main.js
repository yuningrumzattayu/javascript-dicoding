// Fungsi untuk menghitung total harga belanjaan
function calculateTotal(shoppingCart) {
  const total = 0;

  return shoppingCart.reduce((accumulator, cartItem) => {
    if (typeof cartItem.price === 'number') {
      return accumulator + cartItem.price;
    } else {
      console.error(`Tipe data cartItem.price tidak valid`, cartItem);
      return accumulator;
    }
  }, total);
}

// contoh data belanjaan
const shoppingCart = [
  { name: 'Apple', price: 300 },
  { name: 'Banana', price: 120 },
  { name: 'Orange', price: 130 },
  { name: 'Watermelon', price: '160' },
  { name: 'Pineapple', price: null },
  { name: 'Grape', price: null },
];

console.log(`Total Belanjaan : Rp ${calculateTotal(shoppingCart)}`);
