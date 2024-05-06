"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var swiperDesigners = new Swiper('.team__designers', {
    slidesPerView: 1,
    spaceBetween: 25,
    // Navigation arrows
    navigation: {
      nextEl: '#nextDesigners',
      prevEl: '#prevDesigners'
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
      nextEl: '#nextMasters',
      prevEl: '#prevMasters'
    },
    breakpoints: {
      500: {
        slidesPerView: 4
      }
    }
  });
  {
    var btns = document.querySelectorAll(".faq__buttons button");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        console.log('a');
        if (!btn.classList.contains("active")) {
          btns.forEach(function (btn2) {
            return btn2.classList.remove("active");
          });
          btn.classList.add("active");
        }
      });
    });
  }
  {
    var buttons = document.querySelectorAll(".portfolio__nav button");
    var items = document.querySelectorAll(".portfolio__body");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        items.forEach(function (item) {
          item.classList.remove("active");
          if (item.dataset.id === btn.dataset.id) {
            buttons.forEach(function (btn2) {
              return btn2.classList.remove("active");
            });
            item.classList.add("active");
            btn.classList.add("active");
          }
        });
      });
    });
  }
  {
    var _buttons = document.querySelectorAll(".faq__buttons button");
    var _items = document.querySelectorAll(".faq__text-area p");
    _buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        _items.forEach(function (item) {
          item.classList.remove("active");
          if (item.dataset.id === btn.dataset.id) {
            _buttons.forEach(function (btn2) {
              return btn2.classList.remove("active");
            });
            item.classList.add("active");
            btn.classList.add("active");
          }
        });
      });
    });
  }
  {
    var openPopup = function openPopup(elemsClass, popupId) {
      var elems = document.querySelectorAll(".".concat(elemsClass));
      var popup = document.getElementById(popupId);
      elems.forEach(function (elem) {
        elem.addEventListener("click", function (e) {
          e.preventDefault();
          popup.classList.add("active");
        });
      });
    };
    openPopup('open-popup-call', 'popupCall');
    openPopup('open-popup-calc', 'popupCalc');
    openPopup('open-popup-consult', 'popupConsult');
    openPopup('open-popup-smeta', 'popupSmeta');
    openPopup('open-popup-catalog', 'popupCatalog');
    var closeButtons = document.querySelectorAll(".popup__close");
    closeButtons.forEach(function (el) {
      el.addEventListener("click", function () {
        var parent = el.closest(".popup");
        parent.classList.remove("active");
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.keyCode === 27) {
        document.querySelector(".popup.active").classList.remove("active");
      }
    });
  }
});