function kerjakanTugas(mataKuliah, selesai) {
  console.log(`Mulai mengerjakan tugas ${mataKuliah}...`);
  selesai();
}

function selesai() {
  console.log("Selesai mengerjakan tugas!");
}

kerjakanTugas("JavaScript Lanjutan", selesai);

function repeat(n, action) {
  for (let i = 0; i < n; i++){
    action(i)
  }
}

repeat(10, console.log)