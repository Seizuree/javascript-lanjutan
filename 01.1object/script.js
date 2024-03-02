// Object Literal
let mahasiswa1 = {
  nama: "Brian",
  energi: 20,
  makan: function(porsi){
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};

console.log("Object Literal:")
console.log(mahasiswa1)
console.log(mahasiswa1.makan(5))
console.log("Energi : " + mahasiswa1.energi)

// Function Declaration
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.makan = function(porsi){
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };
  mahasiswa.main = function(jam){
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  };
  return mahasiswa;
}

let brian = Mahasiswa("Brian", 20);

console.log("Function Declaration")
console.log(brian)
console.log(brian.makan(3))
console.log("Energi : " + brian.energi)

// Constructor function
// keyword new

function Mahasiswi(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function(porsi){
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };
  this.main = function(jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain`);
  };
}

let Diana = new Mahasiswi('Diana', 5)
console.log("Constructor Function")
console.log(Diana)
console.log(Diana.main(10))
console.log("Energi : " + Diana.energi)