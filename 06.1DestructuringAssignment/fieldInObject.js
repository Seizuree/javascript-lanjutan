// Mengambil field pada object sebagai parameter function
const mhs = {
  id: 123,
  nama: "Brian G",
  umur: "20",
  email: "brian.haryadi@binus.ac.id",
};

function getEmail({ email }) {
    return email
}

console.log("Mengambil field pada object sebagai parameter function:")
console.log(getEmail(mhs))
