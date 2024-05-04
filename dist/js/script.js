"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var swiperDesigners = new Swiper('.team__designers', {
    slidesPerView: 1,
    spaceBetween: 25,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      500: {
        slidesPerView: 4
      }
    }
  });
  var swiperMasters = new Swiper('.team__masters', {
    slidesPerView: 1,
    spaceBetween: 25,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      500: {
        slidesPerView: 4
      }
    }
  });
});