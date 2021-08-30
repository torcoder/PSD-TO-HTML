$(function () {

    "use strict";
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
});

// Es6

const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
});

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
});

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
el.addEventListener("mouseover", openTabs);
});


function openTabs(el) {
var btnTarget = el.currentTarget;
var menu = btnTarget.dataset.menu;

tabContent.forEach(function(el) {
el.classList.remove("active");
});

tabLinks.forEach(function(el) {
el.classList.remove("active");
});

document.querySelector("#" + menu).classList.add("active");

btnTarget.classList.add("active");
}


// Sliders

var swiper = new Swiper(".mySwiperBlog", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});


var swiper = new Swiper(".mySwiperLazy", {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          640: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 40,
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 50,
          },
          1440: {
              slidesPerView: 5,
              spaceBetween: 50,
          }
      },
  });


  var swiper = new Swiper(".mySwiperSmall", {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    autoplay: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


var swiperBusImg = new Swiper('.slider-bus .swiper-img', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: '.slider-bus .next-ctrl',
        prevEl: '.slider-bus .prev-ctrl'
    },
});

var swiperBusContent = new Swiper('.slider-bus .swiper-content', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },

    pagination: {
        el: '.slider-bus .swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.slider-bus .next-ctrl',
        prevEl: '.slider-bus .prev-ctrl'
    },
});