// menu
let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#nav-close").onclick = () => {
  navbar.classList.remove("active");
};

// close search
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.add("active");
};

document.querySelector("#close-search").onclick = () => {
  searchForm.classList.remove("active");
};

//khi cuoc thanh
window.onscroll = () => {
  navbar.classList.remove("active");
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

// window.onload = () => {
//   navbar.classList.remove("active");
//   if (window.scrollY > 0) {
//     document.querySelector(".header").classList.add("active");
//   } else {
//     document.querySelector(".header").classList.remove("active");
//   }
// };

// slide-show
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
