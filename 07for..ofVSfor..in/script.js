// for..of
// Array
const mhs = ["Brian", "Kevin", "Vincent"];
console.log("For..of pada Array");
for (const m of mhs) {
  console.log(m);
}

for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

// String
const nama = "Brian";
console.log("For..of pada String");
for (const n of nama) {
  console.log(n);
}

// Arguments
console.log("For..of pada Arguments");
function sum() {
  let sum = 0;
  for (const a of arguments) {
    sum += a;
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6));

// for..in
const students = {
  nama: "Brian G",
  umur: "20",
  email: "brian.haryadi@binus.ac.id",
};
console.log("For..in loop untuk objects")
console.log("Menampilkan property:")
for (s in students) {
  console.log(s);
}
console.log("Menampilkan value:")
for (s in students) {
  console.log(students[s]);
}
