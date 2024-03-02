// Destructuring function return value
function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}

const { bagi, tambah, kurang, kali } = kalkulasi(2, 5);
console.log("Destructuring function return value: ");
console.log(tambah);
console.log(kurang);
console.log(kali);
console.log(bagi);

// Destructuring function arguments
const mhs = {
  nama: "Brian G",
  umur: "20",
  email: "brian.haryadi@binus.ac.id",
  nilai: {
    tugas: 90,
    uts: 89,
    uas: 100,
  },
};

function printRecords({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, umur saya ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}
console.log("Destructuring function arguments:");
console.log(printRecords(mhs));