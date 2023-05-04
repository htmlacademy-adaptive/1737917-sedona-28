let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
let map = document.querySelector(".map");
let mapImage = document.querySelector(".map__image");
let mapGoogle = document.querySelector(".map__google");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
  }
});

map.classList.remove("map--nojs");
mapImage.classList.remove("map__image--nojs");
mapGoogle.classList.remove("map__google--nojs");
