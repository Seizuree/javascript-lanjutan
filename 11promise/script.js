// Promise

let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji telah ditepati!");
  } else {
    reject("Ingkar janji...");
  }
});

janji1
  .then((res) => console.log("OK! : " + res))
  .catch((res) => console.log("NOT OK: " + res));

let janji = true;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Ditepati setelah beberapa waktu!");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Tidak ditepati setelah beberapa waktu!");
    }, 2000);
  }
});
console.log("Start");
console.log(janji2.then(() => console.log(janji2)));
console.log("Finish");

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Brian",
        pemeran: "Alexander T",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temp: 26,
        kondisi: "Cerah berawan",
      },
    ]);
  }, 500);
});

film.then((res) => console.log(res));
cuaca.then((res) => console.log(res));

Promise.all([film, cuaca])
  .then(res => {
    const [film, cuaca] = res
    console.log(film)
    console.log(cuaca)
  })