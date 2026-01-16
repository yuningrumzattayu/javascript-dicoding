// polymorphism : mengubah subclass yang ada di superclass

class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class iOS extends SmartPhones {
  airDrop() {
    console.log('iOS have a behavior AirDrop');
  }
}
// polymorphism overriding constructor
class Android extends SmartPhones {
  constructor(color, brand, model, device) {
    super(color, brand, model);
    this.device = device;
  }

  // overriding method
  // charging() {
  //   console.log(`charging ${this.model} with fast charger`);
  // }

  // memanggil method charging dari SuperClass (SmartPhones)
  charging() {
    super.charging();
    console.log(`charging ${this.model} with fast charger`);
  }

  splitScreen() {
    console.log('Android Have a Split Screen');
  }
}

const ios = new iOS('black', 'A', '12 Pro Max'); // ios object instance
const android = new Android('white', 'B', 'Galaxy S21', 'smart TV'); // idem

ios.charging();
ios.airDrop();

android.charging();
android.splitScreen();

// Untuk mengetahui asal muasal dari sebuah class, Anda dapat menggunakan instanceof
console.log(ios instanceof SmartPhones); // Output: true
console.log(android instanceof SmartPhones); // Output: true
