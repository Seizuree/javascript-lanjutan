// Rest parameter
const mhs = {
  nama: "Brian Giovanni Haryadi",
  umur: 20,
  email: "brian.haryadi@binus.ac.id",
};

const { nama, ...value } = mhs;
console.log("Rest Parameter:");
console.log(value);