const videos = Array.from(document.querySelectorAll("[data-duration"));
let jsLanjutan = videos
  .filter((video) => {
    video.textContent.includes("JAVASCRIPT LANJUTAN");
  })
  .map((item) => item.dataset.duration)
  .map((time) => {
    const split = time.split(":").map((part) => parseFloat(part));
    return split[0] * 60 + split[1];
  })
  .reduce((total, sec) => total + sec);

const hour = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - hour * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;

const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik,`;
const totalVideo = videos.filter((video) => {
  video.textContent.includes("JAVASCRIPT LANJUTAN").length();
});
const pTotalVideo = document.querySelector(".jumlah-video")
pTotalVideo.textContent = `${totalVideo} Video.`
