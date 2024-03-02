// Memberikan default value + assign ke variabel baru
const mhs = {
  nama: "Brian Giovanni Haryadi",
  umur: 20,
  // email: "brian.haryadi@binus.ac.id",
};

const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
console.log("Memberikan default value + assign ke variabel baru:")
console.log(e);