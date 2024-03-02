const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka = angka.filter((a) => a >= 3);
console.log("Filter: ");
console.log(newAngka);

const angkaKaliDua = angka.map((a) => a * 2);
console.log("Map: ");
console.log(angkaKaliDua);

const totalAngka = angka.reduce((a, i) => a + i);
console.log("Reduce: ");
console.log(totalAngka);

const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((a, i) => a + i);
console.log(
  "Angka yang lebih besar dari 5, dikalikan dengan 3, dan dijumlahkan seluruhnya: "
);
console.log(hasil);
