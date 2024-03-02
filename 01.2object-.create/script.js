const methodMahasiswa = {
  makan: function(porsi){
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
  main: function(jam){
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  },
  tidur: function(jam){
    this.energi += jam * 2
    console.log(`Halo ${this.nama}, selamat tidur! `)
  }
};

function mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa)
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  return mahasiswa;
}

let Brian = mahasiswa("Brian", 20);

console.log("Object.create()")
console.log(Brian)
console.log(Brian.tidur(10))
console.log("Energi : " + Brian.energi)