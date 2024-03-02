// NodeList
const liNama = document.querySelectorAll(".nama");
console.log("For..of pada NodeList");
for (const n of liNama) {
  console.log(n.innerHTML);
}
