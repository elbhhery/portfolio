// animation
AOS.init();
//
let menuBtn = document.getElementById("menu-btn");
let menu = document.querySelector("nav");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
