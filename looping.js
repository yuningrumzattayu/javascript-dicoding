// For Loop
for (let i = 0; i < 5; i++) {
  console.log(`Angka ke- ${i} adalah ${i}`);
}

// // For In
const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

// // For Of
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
  console.log(item);
}

// // while
let i = 0;

while (i < 5) {
  console.log(`Angka ke- ${i} adalah ${i}`);
  i++;
}

// Do While

do {
  console.log(`Angka ke- ${i} adalah ${i}`);
  i++;
} while (i < 5);

// continue : tidak mencetak kalo kondisi sudah memenuhi

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}
// output : 0 1 2 3 4 6 7 8 9
