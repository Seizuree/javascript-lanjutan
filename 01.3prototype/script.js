function mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan!`;
};

mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat bermain!`;
};

mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur!`;
};

let Brian = new mahasiswa("Brian", "20");
console.log("Prototype");
console.log(Brian);
console.log(Brian.main(10));
console.log("Energi: " + Brian.energi);