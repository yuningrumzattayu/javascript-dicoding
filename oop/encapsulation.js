// encapsulation : wadah bersifat private, tidak bisa di ubah

class CoffeeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this._temperatur = 90;
  }

  set temperature(temperature) {
    console.log('you are not allowed to change the temperature');
  }

  get temperature() {
    return this._temperatur;
  }
}

const coffee = new CoffeeMachine(10);
console.log('Sebelum di ubah :', coffee.temperature);

coffee.temperature = 100;
console.log('Sesudah di ubah :', coffee.temperature);

// agar benar-benar tidak dapat diubah pake hastag #
class TeaMachine {
  #temperature = 90;

  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature();
  }

  set temperature(temperature) {
    console.log('you are not allowed to change the temperature');
  }

  get temperature() {
    return this.#temperature;
  }

  #defaultTemperature() {
    return 90;
  }
}
