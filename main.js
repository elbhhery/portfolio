// animation
AOS.init();
//
let menuBtn = document.getElementById("menu-btn");
let menu = document.querySelector("nav");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
let upBtn = document.getElementById("toTop");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
};

upBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
