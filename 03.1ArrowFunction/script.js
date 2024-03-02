let mahasiswa = [
  "Brian Giovanni Haryadi",
  "Venetta Aveline",
  "Jonathan Aprilio",
];

let jumlahHuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jumlahHuruf: nama.length,
}));

console.table(jumlahHuruf);