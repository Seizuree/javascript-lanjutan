const perkenalan = ["Halo", "nama", "saya", "Sandhika Galih"];
// skip
const [salam, , , nama] = perkenalan;
console.log("Skipping items: ");
console.log(nama);
// swap
// let a = 1
// let b = 2
// [a, b] = [b, a]
// return value pada function
function test() {
  return [1, 2];
}
const [a, b] = test();
console.log("Return value in functions:");
console.log(a);
// rest params
const [x, ...val] = [1, 2, 3, 4, 5];
console.log("Using rest parameters");
console.log(x);
console.log(val);