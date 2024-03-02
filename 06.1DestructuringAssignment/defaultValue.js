// memberikan default value
const mhs = {
  nama: "Brian Giovanni Haryadi",
  umur: 20,
  // email: "brian.haryadi@binus.ac.id",
};

const { nama, umur, email = "email@default.com" } = mhs;
console.log("Memberikan default value:");
console.log(email);
