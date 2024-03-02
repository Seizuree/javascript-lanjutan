function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 2000
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject('kelamaan!')
    }
  });
}

const coba = cobaPromise();
coba
  .then(() => console.log(coba))
  .catch(() => console.log(coba))