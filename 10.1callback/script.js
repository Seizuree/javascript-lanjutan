// Callback
// Synchronous Callback
function tampilkanPesan(callback) {
  const nama = prompt("Masukkan nama: ");
  callback(nama);
}
tampilkanPesan((nama) => {
  alert(`Halo, ${nama}`);
});
// Asynchronous Callback
function getDataMahasiswa(url, success, error) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

console.log("Start")
getDataMahasiswa(
  "mahasiswa.json",
  (res) => {
    const mhs = JSON.parse(res);
    mhs.forEach((m) => console.log(m.nama));
  }, () => {}
);
console.log("Finish")
