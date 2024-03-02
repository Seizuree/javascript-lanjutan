function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
  };
}

let selamatPagi = ucapkanSalam('Pagi')
let selamatSiang = ucapkanSalam('Siang')
let selamatMalam = ucapkanSalam('Malam')

selamatPagi('Alex')
selamatSiang('Brian')
selamatMalam('Venetta')