// const ulangi = document.querySelector(".ulangi");
// const kembali = document.querySelector(".kembali");

function openMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.add("open_menu");
}

// function kembali() {
//   const menu = document.querySelector(".menu");
//   menu.classList.remove("open_menu");
// }

function ulangi() {
  location.reload();
}
