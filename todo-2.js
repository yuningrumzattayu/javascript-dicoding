function categorizeNumber(input) {
  if (
    typeof input !== 'number' ||
    Number.isNaN(input) ||
    !Number.isInteger(input)
  ) {
    throw new Error('Input harus berupa bilangan');
  }

  // Negatif
  if (input < 0) {
    return 'Negatif';
  }

  // Nol
  if (input === 0) {
    return 'Nol';
  }

  // Prima
  let isPrime = true;

  if (input <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < input; i++) {
      if (input % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    return 'Prima';
  }

  // Genap
  if (input % 2 === 0) {
    return 'Genap';
  }

  //Ganjil
  return 'Ganjil';
}

try {
  console.log(categorizeNumber(15)); // Output: "Ganjil"
  console.log(categorizeNumber(12)); // Output: "Genap"
  console.log(categorizeNumber(17)); // Output: "Prima"
  console.log(categorizeNumber(0)); // Output: "Nol"
  console.log(categorizeNumber(-5)); // Output: "Negatif"
  categorizeNumber('abc'); // Error
} catch (error) {
  console.log(error.message);
}

/**
 * TODO:
 * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
 * Dengan ketentuan sebagai berikut:
 * 1. Jika input bukan number, bangkitkan (throw) error.
 * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
 * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
 * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
 * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
 * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
 */
