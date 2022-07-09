//  Navigation bar toggler
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".nav");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

//show/Hide Header
let header = document.querySelector(".header");

window.onscroll = function () {
  navbarHide();
};

function navbarHide() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
